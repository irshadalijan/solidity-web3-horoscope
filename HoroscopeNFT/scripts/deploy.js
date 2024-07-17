const hre = require("hardhat");

async function main() {
  const Horoscope = await hre.ethers.deployContract(
    "contracts/HoroscopeNFT.sol:HoroscopeNFT"
  );
  const horoscope = await Horoscope.waitForDeployment();
  console.log("Deploying Contract...");
  console.log("Contract deployed to address:", await horoscope.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
