import { keypairIdentity, Metaplex } from "@metaplex-foundation/js";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";

/**
 * Destroys / Burns the key
 *
 * @param connection The connection to the cluster
 * @param owner The owner of the key
 * @param keyAddress The address of the key to destroy
 **/
export async function destroyKey(
	connection: Connection,
	owner: Keypair,
	keyAddress: PublicKey
) {
	const mpl = Metaplex.make(connection).use(keypairIdentity(owner));

	const nfts = mpl.nfts();

	const { response } = await nfts.delete({
		mintAddress: keyAddress,
	});

	return response;
}
