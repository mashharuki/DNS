const WalletFactory = artifacts.require("WalletFactoryV4");

module.exports = async function (deployer) {
  deployer.deploy(WalletFactory);
};