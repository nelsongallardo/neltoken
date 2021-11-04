require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY, API_URL_PROD, PRIVATE_KEY_PROD } = process.env;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/**
* @type import('hardhat/config').HardhatUserConfig
*/
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]

    },
    mainnet: {
      url: API_URL_PROD,
      accounts: [`0x${PRIVATE_KEY_PROD}`]

    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
}