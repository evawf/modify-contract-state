require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: process.env.ALCHEMY_TESTNET_RPC_URL,
      accounts: [process.env.TESTNET_PRIVATE_KEY],
    },
  },
};
