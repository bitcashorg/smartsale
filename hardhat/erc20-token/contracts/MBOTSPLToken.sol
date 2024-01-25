
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MBOTSPLToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Masterbots Prelaunch Token", "MBOTSPL") {
        _mint(msg.sender, initialSupply);
    }

    // use 6 decimals
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
}
