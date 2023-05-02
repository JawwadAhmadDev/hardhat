const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test contract", function () {
    it("Deployed successfully", async function () {

        const [owner] = await ethers.getSigners();

        const TestContract = await ethers.getContractFactory("TestContract");

        const student = ['jawwad', 1]; // to call constructor having parameter of structure type, we need to pass array.

        const testToken = await TestContract.deploy(student);

        const returnedStudent = await testToken.student();

        expect(returnedStudent.name).to.equal("jawwad");
    });

    it("Name set successfully", async function () {

        const [owner] = await ethers.getSigners();

        const TestContract = await ethers.getContractFactory("TestContract");

        const student = ['jawwad', 1]; // to call constructor having parameter of structure type, we need to pass array.

        const testToken = await TestContract.deploy(student);

        await testToken.setStudent(['hammad', 2]);
        const returnedStudent = await testToken.getStudent();

        expect(await returnedStudent.name).to.equal("hammad"); 
    });
});