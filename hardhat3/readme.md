
## Steps to deploy and verify contract on bscscan using hardhat
1. npm init -y
2. npm install --save-dev hardhat (to install hardhat in the project)
3. npx hardhat (to initialize hardhat in the project)
4. create a repository named 'contracts' in which we will create all contracts.
5. create a sample contract having parameterized constructor taking structure.
6. npx hardhat compile (to compile the contract).
7. create a repository named 'test' in which we will test the contract. For sample two tests are added.
8. npm install --save-dev @nomicfoundation/hardhat-toolbox (to install hardhat-toolbox. This is mendatory to deploy contract in the hardhat context).
9. require("@nomicfoundation/hardhat-toolbox"); (add this line to hardhat.config.js file)


## Description of the project
In this project we will create a simple smart contract, in which instructor will receive a structure typed parameter. We will deploy and verify it to the bscScan Testnet using hardhat