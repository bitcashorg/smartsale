
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MORTokenWithFaucet is ERC20 {
    constructor(uint256 initialSupply) ERC20("MOR (launchpad)", "MOR") {
        _mint(msg.sender, initialSupply);
    }

    // use 18 decimals
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    // Faucet function to distribute tokens
    function faucet(address recipient, uint256 amount) public {
        _mint(recipient, amount);
    }
}
