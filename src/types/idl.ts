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
	],
};
