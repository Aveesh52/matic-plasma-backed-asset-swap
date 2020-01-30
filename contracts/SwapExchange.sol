pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

// Storage
import "./storage/MpStorage.sol";
import "./storage/MpConstants.sol";

// Matic
import "./matic/Marketplace.sol";
import "./matic/ChildERC20.sol";
import "./matic/ChildERC721.sol";

import "./SwapFactory.sol";


contract SwapExchange is Ownable, MpStorage, MpConstants {
    
    ChildERC20 public childERC20;
    ChildERC721 public childERC721;
    Marketplace public market;

    constructor(
        address marketplaceAddr, 
        address childERC20Addr, 
        address childERC721Addr
    ) public {
        market = Marketplace(marketplaceAddr);
        childERC20 = ChildERC20(childERC20Addr);
        childERC721 = ChildERC721(childERC721Addr);
    }

    function swap(
        bytes memory _data1,
        bytes memory _data2,
        bytes32 _orderId,
        uint256 _expiration,
        address _taker
    ) public returns (bool) {
        market.executeOrder(_data1, _data2, _orderId, _expiration, _taker);
    }
    

}
