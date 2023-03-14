import {
	AnchorProvider,
	Program,
	utils as anchorUtils,
	Wallet,
} from "@coral-xyz/anchor";
import {
	ComputeBudgetProgram,
	Connection,
	Keypair,
	PublicKey,
} from "@solana/web3.js";

import {
	NFT_SYMBOL,
	PROGRAM_ID,
	TOKEN_METADATA_PROGRAM_ID,
} from "./constants.js";
import { IDL } from "./types/idl.js";

/**
Generate a new NFT keypair and mint it to the owner's wallet.

@param connection Solana connection
@param name Name of the NFT
@param metadataUri URI of the NFT metadata
@param opts.computeBudgetUnits Computational budget units, defaults to 300000
**/
export async function generateKey(
	connection: Connection,
	owner: Keypair,
	name: string,
	metadataUri: string,
	opts: { computeBudgetUnits: number } = { computeBudgetUnits: 300000 }
): Promise<[string, string]> {
	// Increase computational budget
	const computeBudgetIx = ComputeBudgetProgram.setComputeUnitLimit({
		units: opts.computeBudgetUnits,
	});

	const provider = new AnchorProvider(connection, new Wallet(owner), {});

	// Generate mint keypair
	const mintKeypair = Keypair.generate();

	// Define associated token address
	const tokenAddress: PublicKey = anchorUtils.token.associatedAddress({
		mint: mintKeypair.publicKey,
		owner: owner.publicKey,
	});

	// Get reference to the program on chain
	const program = new Program(IDL, PROGRAM_ID, provider);

	// Get metaplex metadata program address
	const metadataAddress = PublicKey.findProgramAddressSync(
		[
			Buffer.from("metadata"),
			TOKEN_METADATA_PROGRAM_ID.toBuffer(),
			mintKeypair.publicKey.toBuffer(),
		],
		TOKEN_METADATA_PROGRAM_ID
	)[0];

	// Get metaplex master edition program address
	const masterEditionAddress = PublicKey.findProgramAddressSync(
		[
			Buffer.from("metadata"),
			TOKEN_METADATA_PROGRAM_ID.toBuffer(),
			mintKeypair.publicKey.toBuffer(),
			Buffer.from("edition"),
		],
		TOKEN_METADATA_PROGRAM_ID
	)[0];

	const txId = await program.methods
		.mintNft(name, NFT_SYMBOL, metadataUri)
		.accounts({
			masterEdition: masterEditionAddress,
			metadata: metadataAddress,
			mint: mintKeypair.publicKey,
			tokenAccount: tokenAddress,
			mintAuthority: owner.publicKey,
			tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
		})
		.preInstructions([computeBudgetIx])
		.signers([mintKeypair])
		.rpc();

	return [txId, mintKeypair.publicKey.toString()];
}
