export interface Hotkeys {
	instructions: [
		{
			accounts: [
				{
					isMut: true;
					isSigner: false;
					name: "metadata";
				},
				{
					isMut: true;
					isSigner: false;
					name: "masterEdition";
				},
				{
					isMut: true;
					isSigner: true;
					name: "mint";
				},
				{
					isMut: true;
					isSigner: false;
					name: "tokenAccount";
				},
				{
					isMut: true;
					isSigner: true;
					name: "mintAuthority";
				},
				{
					isMut: false;
					isSigner: false;
					name: "rent";
				},
				{
					isMut: false;
					isSigner: false;
					name: "systemProgram";
				},
				{
					isMut: false;
					isSigner: false;
					name: "tokenProgram";
				},
				{
					isMut: false;
					isSigner: false;
					name: "associatedTokenProgram";
				},
				{
					isMut: false;
					isSigner: false;
					name: "tokenMetadataProgram";
				}
			];
			args: [
				{
					name: "metadataTitle";
					type: "string";
				},
				{
					name: "metadataSymbol";
					type: "string";
				},
				{
					name: "metadataUri";
					type: "string";
				}
			];
			name: "mintNft";
		},
		{
			accounts: [
				{
					isMut: true;
					isSigner: false;
					name: "mint";
				},
				{
					isMut: true;
					isSigner: false;
					name: "ownerTokenAccount";
				},
				{
					isMut: true;
					isSigner: true;
					name: "ownerAuthority";
				},
				{
					isMut: true;
					isSigner: false;
					name: "buyerTokenAccount";
				},
				{
					isMut: true;
					isSigner: true;
					name: "buyerAuthority";
				},
				{
					isMut: false;
					isSigner: false;
					name: "rent";
				},
				{
					isMut: false;
					isSigner: false;
					name: "systemProgram";
				},
				{
					isMut: false;
					isSigner: false;
					name: "tokenProgram";
				},
				{
					isMut: false;
					isSigner: false;
					name: "associatedTokenProgram";
				}
			];
			args: [
				{
					name: "saleLamports";
					type: "u64";
				}
			];
			name: "sellNft";
		}
	];
	name: "hotkeys";
	version: "0.1.0";
}

export const IDL: Hotkeys = {
	version: "0.1.0",
	name: "hotkeys",
	instructions: [
		{
			name: "mintNft",
			accounts: [
				{
					name: "metadata",
					isMut: true,
					isSigner: false,
				},
				{
					name: "masterEdition",
					isMut: true,
					isSigner: false,
				},
				{
					name: "mint",
					isMut: true,
					isSigner: true,
				},
				{
					name: "tokenAccount",
					isMut: true,
					isSigner: false,
				},
				{
					name: "mintAuthority",
					isMut: true,
					isSigner: true,
				},
				{
					name: "rent",
					isMut: false,
					isSigner: false,
				},
				{
					name: "systemProgram",
					isMut: false,
					isSigner: false,
				},
				{
					name: "tokenProgram",
					isMut: false,
					isSigner: false,
				},
				{
					name: "associatedTokenProgram",
					isMut: false,
					isSigner: false,
				},
				{
					name: "tokenMetadataProgram",
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: "metadataTitle",
					type: "string",
				},
				{
					name: "metadataSymbol",
					type: "string",
				},
				{
					name: "metadataUri",
					type: "string",
				},
			],
		},
		{
			name: "sellNft",
			accounts: [
				{
					name: "mint",
					isMut: true,
					isSigner: false,
				},
				{
					name: "ownerTokenAccount",
					isMut: true,
					isSigner: false,
				},
				{
					name: "ownerAuthority",
					isMut: true,
					isSigner: true,
				},
				{
					name: "buyerTokenAccount",
					isMut: true,
					isSigner: false,
				},
				{
					name: "buyerAuthority",
					isMut: true,
					isSigner: true,
				},
				{
					name: "rent",
					isMut: false,
					isSigner: false,
				},
				{
					name: "systemProgram",
					isMut: false,
					isSigner: false,
				},
				{
					name: "tokenProgram",
					isMut: false,
					isSigner: false,
				},
				{
					name: "associatedTokenProgram",
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: "saleLamports",
					type: "u64",
				},
			],
		},
	],
};
