pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC721/IERC721.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

// Storage
import "./storage/MpStorage.sol";
import "./storage/MpConstants.sol";

// Matic
import "./matic/child/misc/ParentTokenMock.sol";  // Ropsten
import "./matic/child/ChildToken.sol";       // Ropsten => Matic

import "./matic/child/ChildERC20.sol";       // Matic
import "./matic/child/ChildERC721.sol";      // Matic
import "./matic/child/misc/Marketplace.sol";



/***
 * @notice - This contract is that deposit each ERC20 token from mainnet to matic-network
 */
contract SwapFactory is Ownable, MpStorage, MpConstants {

    ChildERC20 public childERC20;
    ChildERC721 public childERC721;
    Marketplace public market;

    ParentTokenMock public parentToken;

    ChildToken public childToken;

    address private testERC20Ropsten;
    address private testERC721Ropsten;

    constructor(
        address _testERC20Ropsten, 
        address _testERC721Ropsten,
        address marketplaceAddr, 
        address childERC20Addr, 
        address childERC721Addr,
        address parentTokenAddr,
        address childTokenAddr
    ) public {
        // @Notice - Ropsten
        IERC20(_testERC20Ropsten);
        IERC721(_testERC721Ropsten);

        // @Notice - Matic Network
        market = Marketplace(marketplaceAddr);
        childERC20 = ChildERC20(childERC20Addr);
        childERC721 = ChildERC721(childERC721Addr);

        // @Notice
        parentToken = ParentTokenMock(parentTokenAddr);  

        childToken = ChildToken(childTokenAddr);


        testERC20Ropsten = _testERC20Ropsten;
        testERC721Ropsten = _testERC721Ropsten;
    }

    function testFunc() public returns (bool) {
        return MpConstants.CONFIRMED;
    }
    

    function depositToMainNetwork(address user, uint256 amountOrTokenId) public returns (uint256) {
        // In progress
        IERC20(testERC20Ropsten);
        IERC721(testERC721Ropsten);

        // @dev - Inherited deposit function from ChildToken.sol
        childToken.deposit(user, amountOrTokenId);

        return MpConstants.EXAMPLE_VALUE;
    }
    

    function depositToMaticNetwork(
        // From RootChain
        address userFromRootChain, 
        uint256 amountOrTokenIdFromRootChain,

        // ERC20
        address userChildERC20, 
        uint256 amount,
        // ERC721
        address userChildERC721, 
        uint256 tokenId
    ) public returns (uint256) {
        uint256 _depositToMainNetwork;

        // @dev - First, each token holder deposit each token on Mainnet.
        _depositToMainNetwork = depositToMainNetwork(userFromRootChain, amountOrTokenIdFromRootChain);

        // @dev - Deposit ChildERC20
        childERC20.deposit(userChildERC20, amount);

        // @dev - Deposit ChildERC721
        childERC721.deposit(userChildERC721, tokenId);

        // @dev - Second, each deposited token on Mainnet are deposited on Maticnet  
        return MpConstants.EXAMPLE_VALUE;
    }
    

}
