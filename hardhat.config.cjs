import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  paths: {
    sources: "contracts",
    tests: "chain-tests",
    cache: "chain-cache",
    artifacts: "chain-artifacts",
  },
  networks: {
    // Polygon Amoy testnet
    polygonAmoy: {
      url: process.env.AMOY_RPC_URL || "",
      accounts: process.env.DEPLOYER_PK ? [process.env.DEPLOYER_PK] : [],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_KEY || "",
  },
};

export default config;


