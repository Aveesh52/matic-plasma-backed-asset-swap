pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

// Storage
import "./storage/MpStorage.sol";
import "./storage/MpConstants.sol";

// MarketPlace.sol
import "./matic/Marketplace.sol";


contract SwapExchange is Ownable, MpStorage, MpConstants {
    
    constructor() public {}

}
