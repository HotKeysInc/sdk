import { keypairIdentity, Metaplex } from "@metaplex-foundation/js";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";

/**
 * Checks if the owner has ownership of the expected token
 *
 * @param connection The connection to the cluster
 * @param owner The owner of the token
 * @param token The token to check
 * @returns True if the owner has ownership of the token, false otherwise
 **/
export async function checkAccess(
	connection: Connection,
	owner: Keypair,
	keyAddress: PublicKey
) {
	const mpl = Metaplex.make(connection).use(keypairIdentity(owner));

	const nfts = mpl.nfts();
	const ownerNfts = await nfts.findAllByOwner({ owner: owner.publicKey });

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
	return ownerNfts.some((nft) => nft.mintAddress.equals(keyAddress));
}
