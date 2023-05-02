
# Smart contract address which is verified by following this route.
[https://testnet.bscscan.com/address/0x17506eb5eac077dd208befde77fe722cf965e75f#code]
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
10. create a secrete.json file. In which we stored our private data like mnemonic and API key. Description is as follows:
    a. Mnemonic Phrase: This is the phrase that we were shown at the time of creation of metamask. This will be used to connect hardhat to our metamask accounts.
    b. API Key: This will be used to verify the contract deployed on bscscan.  [https://bscscan.com/myapikey]
11. configure hardhat with bscscan to deploy our contract on bscscan. [https://docs.bnbchain.org/docs/hardhat-new/]
12. create a repository named 'scripts', in which we will have store scripts to deploy contract on bscscan.
13. npx hardhat run --network testnet scripts/deploy.js (run this command to deploy contract on bscscan testnet)
14. npm install --save-dev @nomiclabs/hardhat-etherscan (to verify we have to add this package)
15. configure hardhat.config.js file for verifying contract on bscscan. for detial see the last commit changes
16. npx buidler verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1" (run this command to verify the deployed contract).
17. Because we have to passed an array to constructor, wo we will store parameters in a separate file name arguments.js and then call that file in the above command.
18. if we have stored arguments in separate file, then run the following command (npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS)
19. I have verified this contract by running the following command:  npx hardhat verify --network testnet --constructor-args arguments.js 0x17506eB5eAc077DD208bEfdE77FE722cF965E75F





## Description of the project
In this project we will create a simple smart contract, in which instructor will receive a structure typed parameter. We will deploy and verify it to the bscScan Testnet using hardhat