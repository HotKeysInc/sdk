import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import os from "os";
import path from "path";
import { describe, it } from "vitest";

import { sellKey } from "./sellKey.js";
import { loadPrivateKeyFromFile } from "./test-utils.js";

describe("sellKey", () => {
	const owner = Keypair.fromSecretKey(
		Uint8Array.from(
			loadPrivateKeyFromFile(path.join(os.homedir(), ".config/solana/id.json"))
		)
	);
	const buyer = Keypair.fromSecretKey(
		Uint8Array.from(
			loadPrivateKeyFromFile(
				path.join(__dirname, "test_keypairs", "alternate.json")
			)
		)
	);

	const connection = new Connection(clusterApiUrl("devnet"));

	it("should sell a key", async () => {
		const token = new PublicKey("4eepA7KT2ZzyA8Gih94AxVb5uNPXy7d2mPZR6HF2TtZF");

		const txId = await sellKey(connection, owner, buyer, token, 0.1);

		console.log("txId: ", txId);
	});
});
