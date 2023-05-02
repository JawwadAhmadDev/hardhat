const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test contract", function () {
    it("Deployed successfully", async function () {

        const [owner] = await ethers.getSigners();

        const TestContract = await ethers.getContractFactory("TestContract");

        const testToken = await TestContract.deploy('jawwad');

        const name = await testToken.name();

        expect(name).to.equal("jawwad");
    });

    it("Name set successfully", async function () {

        const [owner] = await ethers.getSigners();

        const TestContract = await ethers.getContractFactory("TestContract");

        const testToken = await TestContract.deploy('jawwad');

        const name = await testToken.setName('hammad');

        expect(await testToken.name()).to.equal("hammad"); 
    });
});