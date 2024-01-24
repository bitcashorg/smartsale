
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MBOTSCredToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Masterbots Credit Token", "MBOTS") {
        _mint(msg.sender, initialSupply);
    }
}
