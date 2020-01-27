pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

// Storage
import "./storage/MpStorage.sol";
import "./storage/MpConstants.sol";


/***
 * @notice - This contract is that deposit each ERC20 token from mainnet to matic-network
 */
contract SwapFactory is Ownable, MpStorage, MpConstants {
    
    constructor() public {}

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
