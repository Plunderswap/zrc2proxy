import { ethers, network, run } from "hardhat";

const main = async () => {
  // Compile contracts
  await run("compile");
  console.log("Compiled contracts.");

  const networkName = network.name;

  // Sanity checks
  if (networkName === "mainnet") {
    if (!process.env.KEY_MAINNET) {
      throw new Error(
        "Missing private key, refer to README 'Deployment' section"
      );
    }
  } else if (networkName === "testnet") {
    if (!process.env.KEY_TESTNET) {
      throw new Error(
        "Missing private key, refer to README 'Deployment' section"
      );
    }
  }

  const [deployer] = await ethers.getSigners();

  console.log("Deploying to network:", networkName);

  console.log("Deploying EIP20ZRC2Proxy..");
  const plunderZrc2Proxy = await ethers.getContractFactory("EIP20ZRC2Proxy");
  const zrc2Proxy = await plunderZrc2Proxy.deploy(
    "0xb8950d4d6baf479749d4152fc60fad86195eb0b2"
  );
  await zrc2Proxy.deployed();

  console.log("EIP20ZRC2Proxy deployed to:", zrc2Proxy.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
