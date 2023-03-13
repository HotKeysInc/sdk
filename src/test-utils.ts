import fs from "fs";

export function loadPrivateKeyFromFile(filePath: string): number[] {
	const privateKey = fs.readFileSync(filePath, "utf8");

	return JSON.parse(privateKey) as number[];
}
