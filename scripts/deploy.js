// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const ERC20Token_GTT = await hre.ethers.getContractFactory("ERC20Token_GTT");
  // const GTT = await ERC20Token_GTT.deploy();
  // await GTT.waitForDeployment();
  // const ERC20Token_GTTAddr = GTT.target;
  // console.log("ERC20Token_GTT contract has been deployed to: " + ERC20Token_GTTAddr);

  // const ERC777Token_GTST = await hre.ethers.getContractFactory("ERC777Token_GTST");
  // const GTST = await ERC777Token_GTST.deploy();
  // await GTST.waitForDeployment();
  // const ERC777Token_GTSTAddr = GTST.target;
  // console.log("ERC777Token_GTST contract has been deployed to: " + ERC777Token_GTSTAddr);

  // const FairTokenGFTContract = await hre.ethers.getContractFactory("FairTokenGFT");
  // const GFT = await FairTokenGFTContract.deploy();
  // await GFT.waitForDeployment();
  // const FairTokenGFTAddr = GFT.target;
  // console.log("FairTokenGFT contract has been deployed to: " + FairTokenGFTAddr);

  // const ERC721TokenWithPermitContract = await hre.ethers.getContractFactory("ERC721TokenWithPermit");
  // const ERC721TokenWithPermit = await ERC721TokenWithPermitContract.deploy();
  // await ERC721TokenWithPermit.waitForDeployment();
  // const ERC721TokenWithPermitAddr = ERC721TokenWithPermit.target;
  // console.log("ERC721TokenWithPermit contract has been deployed to: " + ERC721TokenWithPermitAddr);

  // const SuperBankContract = await hre.ethers.getContractFactory("SuperBank");
  // const SuperBank = await SuperBankContract.deploy();
  // await SuperBank.waitForDeployment();
  // const SuperBankAddr = SuperBank.target;
  // console.log("SuperBank contract has been deployed to: " + SuperBankAddr);

  const ERC777Token_GTSTAddr = "0x94B1424C3435757E611F27543eedB37bcD3BDEb4";
  const NFTMarket_V2_1Contract = await hre.ethers.getContractFactory("NFTMarket_V2_1");
  const NFTMarket_V2_1 = await NFTMarket_V2_1Contract.deploy(ERC777Token_GTSTAddr);
  await NFTMarket_V2_1.waitForDeployment();
  const NFTMarket_V2_1Addr = NFTMarket_V2_1.target;
  console.log("NFTMarket_V2_1 contract has been deployed to: " + NFTMarket_V2_1Addr);

  // const ERC20TokenFactoryContract = await hre.ethers.getContractFactory("ERC20TokenFactory");
  // const ERC20TokenFactory = await ERC20TokenFactoryContract.deploy(FairTokenGFTAddr);
  // await ERC20TokenFactory.waitForDeployment();
  // const ERC20TokenFactoryAddr = ERC20TokenFactory.target;
  // console.log("ERC20TokenFactory contract has been deployed to: " + ERC20TokenFactoryAddr);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
