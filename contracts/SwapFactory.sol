pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";


/***
 * @notice - This contract is that deposit each ERC20 token from mainnet to matic-network
 */
contract SwapFactory {
    
    constructor() public {}

    function testFunc() public returns (bool) {
        return true;
    }
    

    function depositToMainNetwork() public returns (uint256) {
        return 1;   
    }
    

    function depositToMaticNetwork() public returns (uint256) {
        uint256 _depositToMainNetwork;

        // @dev - First, each token holder deposit each token on Mainnet.
        _depositToMainNetwork = depositToMainNetwork();

        // @dev - Second, each deposited token on Mainnet are deposited on Maticnet  
        return 1;
    }
    

}
