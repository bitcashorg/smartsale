
const { ethers } = require("hardhat");

async function main() {
    const USDCredTokenWithFaucetOwnable = await ethers.getContractFactory("USDCredTokenWithFaucetOwnable");
    const token = await USDCredTokenWithFaucetOwnable.deploy(ethers.utils.parseUnits("1000000", 6));

    await token.deployed();

    console.log("USDCredTokenWithFaucetOwnable deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
