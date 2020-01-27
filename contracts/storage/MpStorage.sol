pragma solidity ^0.5.11;

import "./MpObjects.sol";
import "./MpEvents.sol";


// shared storage
contract MpStorage is MpObjects, MpEvents {

    mapping (uint => ExampleObject) examples;

}

