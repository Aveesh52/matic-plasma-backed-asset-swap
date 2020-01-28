pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

// Storage
import "./storage/MpStorage.sol";
import "./storage/MpConstants.sol";

// Matic
import "./matic/ChildERC20.sol";
import "./matic/ChildERC721.sol";


/***
 * @notice - This contract is that deposit each ERC20 token from mainnet to matic-network
 */
contract SwapFactory is Ownable, MpStorage, MpConstants {

    constructor(address _testERC20Ropsten, address _testERC721Ropsten) public {
        IERC20(_testERC20Ropsten);
        IERC20(_testERC721Ropsten);
    }

    function testFunc() public returns (bool) {
        return MpConstants.CONFIRMED;
    }
    

    function depositToMainNetwork() public returns (uint256) {
        return MpConstants.EXAMPLE_VALUE;
    }
    

    function depositToMaticNetwork() public returns (uint256) {
        uint256 _depositToMainNetwork;

        // @dev - First, each token holder deposit each token on Mainnet.
        _depositToMainNetwork = depositToMainNetwork();

        // @dev - Second, each deposited token on Mainnet are deposited on Maticnet  
        return MpConstants.EXAMPLE_VALUE;
    }
    

}
