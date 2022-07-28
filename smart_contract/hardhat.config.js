require('@nomiclabs/hardhat-waffle');
require('dotenv').config()

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${process.env.ACCOUNT_ADDRESS}`],
    },
  },
};
