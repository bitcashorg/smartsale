
const { ethers } = require("hardhat");

async function main() {
    const MBOTSCredToken = await ethers.getContractFactory("MBOTSCredToken");
    const token = await MBOTSCredToken.deploy(ethers.utils.parseUnits("1000000", 6));

    await token.deployed();

    console.log("MBOTSCredToken deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
