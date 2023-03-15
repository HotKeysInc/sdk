import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";
import os from "os";
import path from "path";
import { describe, it } from "vitest";

import { generateKey } from "./generateKey.js";
import { loadPrivateKeyFromFile } from "./test-utils.js";

describe("generateKey", () => {
	const owner = Keypair.fromSecretKey(
		Uint8Array.from(
			loadPrivateKeyFromFile(path.join(os.homedir(), ".config/solana/id.json"))
		)
	);

	const connection = new Connection(clusterApiUrl("devnet"));

	it(
		"should generate a key",
		async () => {
			const [txId, mintId] = await generateKey(
				connection,
				owner,
				"NF [Keys]",
				"https://raw.githubusercontent.com/HotKeysInc/programs/main/assets/test_metadata.json"
			);

			console.log("txId: ", txId);
			console.log("mintId: ", mintId);
		},
		{ timeout: 50000 }
	);
});
