var SwapExchange = artifacts.require("SwapExchange");

var Marketplace = artifacts.require ("Marketplace");
var marketplaceAddr = Marketplace.address;


module.exports = function(deployer) {
  deployer.deploy(SwapExchange, marketplaceAddr);
};
