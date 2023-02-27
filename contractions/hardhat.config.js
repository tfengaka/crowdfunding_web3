/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
module.exports = {
	solidity: {
		version: "0.8.9",
		networks: {
			hardhat: {},
			bsc_testnet: {
				url: "https://data-seed-prebsc-1-s2.binance.org:8545",
				accounts: [process.env.PRIVATE_KEY],
			},
		},
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
