<h1 align="center">HotkeysSDK</h1>

<p align="center">Typescript SDK for HotKeys</p>

<p align="center">
	<a href="#contributors" target="_blank">
<!-- prettier-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<img alt="All Contributors: 2" src="https://img.shields.io/badge/all_contributors-2-21bb42.svg" />
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- prettier-ignore-end -->
	</a>
	<a href="https://codecov.io/gh/HotKeysInc/sdk" target="_blank">
		<img alt="Codecov Test Coverage" src="https://codecov.io/gh/HotKeysInc/sdk/branch/main/graph/badge.svg?token=eVIFY4MhfQ"/>
	</a>
	<a href="https://github.com/HotKeysInc/sdk/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank">
		<img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" />
	</a>
	<a href="https://github.com/HotKeysInc/sdk/blob/main/LICENSE.md" target="_blank">
	    <img alt="License: MIT" src="https://img.shields.io/github/license/HotKeysInc/sdk?color=21bb42">
    </a>
	<a href="https://github.com/sponsors/HotKeysInc" target="_blank">
    	<img alt="Sponsor: On GitHub" src="https://img.shields.io/badge/sponsor-on_github-21bb42.svg" />
    </a>
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
    <img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i hotkeys-sdk
```

```ts
import * as hotkeys from "hotkeys-sdk";

const [txId, mintId] = await generateKey(
	connection,
	owner,
	"HK: Plugin",
	"https://raw.githubusercontent.com/HotKeysInc/programs/main/assets/test_metadata.json"
);

console.log("txId: ", txId);
console.log("mintId: ", mintId);
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md).
Thanks! 💖



<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

