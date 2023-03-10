import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";
import fs from "fs";
import os from "os";
import path from "path";
import { describe, it } from "vitest";

import { generateKey } from "./generateKey.js";

function loadPrivateKeyFromFile(filePath: string): number[] {
	const privateKey = fs.readFileSync(filePath, "utf8");

	return JSON.parse(privateKey) as number[];
}

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
				"HK: Plugin",
				"https://raw.githubusercontent.com/HotKeysInc/programs/main/assets/test_metadata.json"
			);

			console.log("txId: ", txId);
			console.log("mintId: ", mintId);
		},
		{ timeout: 50000 }
	);
});
