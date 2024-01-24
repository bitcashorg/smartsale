
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MBOTSCredToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Masterbots Credit Token", "MBOTSCred") {
        _mint(msg.sender, initialSupply);
    }

    // use 6 decimals
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
}
