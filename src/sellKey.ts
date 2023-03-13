import { AnchorProvider, BN, Program, Wallet } from "@project-serum/anchor";
import { associatedAddress } from "@project-serum/anchor/dist/cjs/utils/token";
import {
	Connection,
	Keypair,
	LAMPORTS_PER_SOL,
	PublicKey,
} from "@solana/web3.js";

import { PROGRAM_ID } from "./constants.js";
import { IDL } from "./types/idl.js";

/**
 * Sell an NFT keypair to a buyer.
 *
 * @param connection Solana connection
 * @param owner Keypair of the owner
 * @param buyer Public key of the buyer
 * @param token Public key of the token
 * @param saleAmount Sale amount in SOL
 * */
export async function sellKey(
	connection: Connection,
	owner: Keypair,
	buyer: Keypair,
	token: PublicKey,
	saleAmount: number // in SOL
) {
	const saleAmountInLamports = saleAmount * LAMPORTS_PER_SOL;

	const provider = new AnchorProvider(connection, new Wallet(owner), {});

	// Get reference to the program on chain
	const program = new Program(IDL, PROGRAM_ID, provider);

	// Derive associated token accounts for owner and buyer
	const ownerTokenAddress = await associatedAddress({
		mint: token,
		owner: owner.publicKey,
	});
	const buyerTokenAddress = await associatedAddress({
		mint: token,
		owner: buyer.publicKey,
	});

	return await program.methods
		.sellNft(new BN(saleAmountInLamports))
		.accounts({
			mint: token,
			ownerTokenAccount: ownerTokenAddress,
			ownerAuthority: owner.publicKey,
			buyerTokenAccount: buyerTokenAddress,
			buyerAuthority: buyer.publicKey,
		})
		.signers([buyer])
		.rpc();
}
