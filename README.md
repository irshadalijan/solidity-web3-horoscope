<p align="center">Horoscope - Solidity + Web3 </p>

# This is the sample project for practicing Solidity and Web3

## HoroscopeNFT

    - This is solidity project with smart contract to deploy contract to test net using hardhat
    - Make sure MetaMask is installed in browser then goto https://chainlist.org/chain/80002 and network `Amoy` by connecting matamask wallet with it.
    - Visit https://faucet.polygon.technology/ select Amoy network and send test tokens to your account in order to deploy on testnet.
    - run `npm install` to install the required packages
    - run `npx hardhat compile` to compile the code
    - run `npx hardhat run scripts/deploy.js` to deploy
    - Don't forget to add respective .env values env.sample file is provided
    - Note the contract address you got when you deployed the HoroscopeNFT.sol file

## horoscopeweb3
    - This is react.js Web3 project
    - Add MetaMask extension to the browser and create / import your account
    - get the abi json file from your solidity project `artifacts/contracts/CONTRACT_NAME.sol/CONTRACT_NAME.json` and put in `src/abi` directory
    - run `npm install` to install the required packages
    - add respective `NFT_CONTRACT_ADDRESS` which you got when you deployed the HoroscopeNFT.sol file
    - run `npm start` you should be able to see the app on `http://localhost:3000`

