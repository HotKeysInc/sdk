import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import os from "os";
import path from "path";
import { describe, it } from "vitest";

import { destroyKey } from "./destroyKey.js";
import { loadPrivateKeyFromFile } from "./test-utils.js";

describe("destroyKey", () => {
	const owner = Keypair.fromSecretKey(
		Uint8Array.from(
			loadPrivateKeyFromFile(path.join(os.homedir(), ".config/solana/id.json"))
		)
	);

	const connection = new Connection(clusterApiUrl("devnet"));

	it(
		"destroy the key",
		async () => {
			const tokenToDestroy = new PublicKey(
				"5rdsz9hv3ySxL1TvNwtzxExr4khj5KBu56CRQkgfy87g"
			);

			const response = await destroyKey(connection, owner, tokenToDestroy);

			console.log("response: ", response);
		},
		{ timeout: 50000 }
	);
});
