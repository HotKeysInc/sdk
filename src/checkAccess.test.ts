import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import os from "os";
import path from "path";
import { assert, describe, it } from "vitest";

import { checkAccess } from "./checkAccess.js";
import { loadPrivateKeyFromFile } from "./test-utils.js";

describe("checkAccess", () => {
	const owner = Keypair.fromSecretKey(
		Uint8Array.from(
			loadPrivateKeyFromFile(path.join(os.homedir(), ".config/solana/id.json"))
		)
	);

	const connection = new Connection(clusterApiUrl("devnet"));

	it("should return true", async () => {
		const token = new PublicKey("APzsocjWi5aeWuHA5ybPkV8oByMTUq7G7jZ4EvTbwbHb");

		const result = await checkAccess(connection, owner, token);

		// eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
		assert(result === true);
	});

	it("should return false", async () => {
		const token = new PublicKey("EH64Hem7LkpGzxRbgF2YLPQFkSgfJCkTwoc8mSwYiDLr");

		const result = await checkAccess(connection, owner, token);

		// eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
		assert(result === false);
	});
});
