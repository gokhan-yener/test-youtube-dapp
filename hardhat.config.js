require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const privateKey = "df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e";
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// https://polygon-mumbai.g.alchemy.com/v2/P3ka4QNiO3tQM1In_L8ttMzOQtxjIscX
// https://ropsten.infura.io/v3/4864e506cf844c519723db276ab1374d

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      /*
      Infura API adresi buraya girilmeli
      */
      url: "https://polygon-mumbai.g.alchemy.com/v2/P3ka4QNiO3tQM1In_L8ttMzOQtxjIscX",
      accounts: [privateKey]
    },
    ropsten: {
      /*
      Ropsten API adresi buraya girilmeli
      */
      url: "https://ropsten.infura.io/v3/4864e506cf844c519723db276ab1374d",
      accounts: [privateKey]
    },
    rinkeby: {
      /*
      Rinkeby API adresi buraya girilmeli
      */
      url: "https://eth-rinkeby.alchemyapi.io/v2/P3ka4QNiO3tQM1In_L8ttMzOQtxjIscX",
      accounts: [privateKey]
    },
    binance: {
      /*
      bsc nin adresi standart direk kopyala yapıştır yapabilirsin
      */
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
  }
};
