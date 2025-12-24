const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CertificateRegistry", function () {
  let registry;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    const Registry = await ethers.getContractFactory("CertificateRegistry");
    registry = await Registry.deploy();
    await registry.waitForDeployment();
  });

  it("Should store and retrieve a certificate", async function () {
    const subjectId = "fund_abc_001";
    const propFirmId = "The5ers";
    const certHash = "ipfs://bafybeigdyr...";

    await registry.storeHash(subjectId, propFirmId, certHash);

    const result = await registry.getCertificate(subjectId);

    expect(result[0]).to.equal(propFirmId);
    expect(result[1]).to.equal(certHash);
    expect(result[3]).to.equal(owner.address);
  });

  it("Should not allow duplicate subjectId", async function () {
    await registry.storeHash("id1", "The5ers", "hash1");

    await expect(
      registry.storeHash("id1", "The5ers", "hash2")
    ).to.be.revertedWith("Already stored");
  });
});
