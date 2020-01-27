var SwapFactory = artifacts.require("SwapFactory");

// [ref]: https://docs.matic.network/matic-js-tutorial/#configuring-matic-test-tokens-on-metamask
const _testERC20Ropsten = '0x70459e550254b9d3520a56ee95b78ee4f2dbd846'     // TEST (ERC20) on Ropsten
const _testERC721Ropsten = '0x07d799252cf13c01f602779b4dce24f4e5b08bbd'    // TEST (ERC721) on Ropsten

module.exports = function(deployer) {
  deployer.deploy(SwapFactory, _testERC20Ropsten, _testERC721Ropsten);
};
