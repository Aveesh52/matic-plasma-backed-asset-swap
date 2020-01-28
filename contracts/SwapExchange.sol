pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

// Storage
import "./storage/MpStorage.sol";
import "./storage/MpConstants.sol";

// Matic
import "./matic/Marketplace.sol";

import "./SwapFactory.sol";


contract SwapExchange is Ownable, MpStorage, MpConstants {
    
    Marketplace public market;

    constructor(address marketplaceAddr) public {
        market = Marketplace(marketplaceAddr);
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
