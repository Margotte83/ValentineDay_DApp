require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: ".src/abi",
  },
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/",
      accounts: [
        "0x",
      ],
    },
    mainnet: {
      url: "",
      accounts: [""],
    },
  },
};
