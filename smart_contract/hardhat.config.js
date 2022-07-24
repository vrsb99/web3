require('@nomiclabs/hardhat-waffle');
require('dotenv').config()

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${process.env.ACCOUNT_ADDRESS}`],
    },
  },
};
