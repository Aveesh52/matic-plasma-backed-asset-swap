var SwapExchange = artifacts.require("SwapExchange");

var Marketplace = artifacts.require ("Marketplace");
var marketplaceAddr = Marketplace.address;

var ChildERC20 = artifacts.require("ChildERC20");
var childERC20Addr = ChildERC20.address; 

var ChildERC721 = artifacts.require ("ChildERC721");
var childERC721Addr = ChildERC721.address; 


module.exports = function(deployer) {
  deployer.deploy(
    SwapExchange, 
    marketplaceAddr,
    childERC20Addr,
    childERC721Addr
  );
};
