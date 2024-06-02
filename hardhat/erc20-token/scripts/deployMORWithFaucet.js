
const { ethers } = require("hardhat");

async function main() {
    const MORCredTokenWithFaucet = await ethers.getContractFactory("MORTokenWithFaucet");
    const token = await MORCredTokenWithFaucet.deploy(ethers.utils.parseUnits("1000000", 18));

    await token.deployed();

    console.log("MORTokenWithFaucet deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
