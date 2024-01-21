
const { ethers } = require("hardhat");

async function main() {
    const USDTToken = await ethers.getContractFactory("USDTToken");
    const token = await USDTToken.deploy(ethers.utils.parseUnits("1000000", 6));

    await token.deployed();

    console.log("USDTToken deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
