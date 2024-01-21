
const { ethers } = require("hardhat");

async function main() {
    const USDTTokenWithFaucet = await ethers.getContractFactory("USDTTokenWithFaucet");
    const token = await USDTTokenWithFaucet.deploy(ethers.utils.parseUnits("1000000", 6));

    await token.deployed();

    console.log("USDTTokenWithFaucet deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
