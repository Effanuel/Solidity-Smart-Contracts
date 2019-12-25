# Solidity based Lottery application

<p align="center"> 
  <img src='https://github.com/Effanuel/Solidity-Smart-Contracts/blob/master/assets/Interface_manager.png'>
</p>

## Table of Contents

- [Current Features](#current-features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)

# Solidity-Smart-Contracts

This is a lottery application build with contracts.

### Current Features

- Host a lottery for other addresses to buy tickets to enter;
- The winner wins the pot.

### Built With

The Backend was built using **Node + Solidity + Truffle + Ganache**. The Frontend is **React + Redux**. Some styled components were taken from **React Bootstrap**. Connection between backend and frontend is made with [Metamask.](https://metamask.io/)

- [Node](https://nodejs.org/en/) + [Solidity](https://github.com/ethereum/solidity) + [Truffle](https://github.com/trufflesuite/truffle) + [Ganache](https://www.trufflesuite.com/ganache)
- [React](https://reactjs.org/) + [Redux](https://redux.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)

<!-- GETTING STARTED -->

## Getting Started

1. **Start Metamask:**
   
   * When creating an account, **save your mnemonic phrase if you want to connect to Ropsten later**;
   
   * Connect to `http://localhost:8545`
   
2. **Start Ganache:**

   * Create and load a workspace
     * When creating a workspace, set port to be **8545** and not 7545 in the *SERVER* tab;

3. **Import accounts to Metamask**

   * Copy private keys of **Ganache** accounts;

   * Import them into *Metamask* (they should have 100ETH each);

4. **Deploy contracts:** (for `localhost`)

   * Go to `solidity` folder;
   * `truffle migrate --reset` *(compiled files will appear in `build` folder)*;
     * `truffle migrate --network ropsten` for **Ropsten network**;
   * Put the latest **manager_address** and **contract_address** of the output console to `lottery/src/config.json` file.

5. **After you deploy:**

   * Copy `/build/contracts/Lottery.json` contents to `Lottery.json` in `lottery` folder;
   
### Prerequisites

- [Nodejs](https://nodejs.org/en/download/)
- [Truffle](https://github.com/trufflesuite/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)
- [Metamask](https://metamask.io/)

### Installation

1. **Clone the repo or [download zip]():**

```sh
git clone https://github.com/Effanuel/Solidity-Smart-Contracts-master/archive/v1.0.zip
cd Solidity-Smart-Contracts-master/lottery
```

2. **Install NPM packages:**

```sh
npm run init:packages
```

3. **Start the application:**

```sh
npm start
```

<!-- USAGE EXAMPLES -->

## Usage

##### Run application:

```sh
cd lottery
npm start
```

## Ropsten
### To deploy to Ropsten test network:
  * Create [infura](https://infura.io/) account, create a project and put endpoint and **Metamask** mnemonic phrase to `config-ropsten.json` file;
  * To deploy, you will need ETH for your Ropsten accounts. You can get some [here](https://faucet.ropsten.be/).
  * Instead of `truffle migrate --reset` do `truffle migrate --network ropsten`;

## Etherscan
### [Deployed contract to ropsten network](https://ropsten.etherscan.io/address/0xF9189f6549061a5C082dbf061c1449729c810730)

## Roadmap

- Proper tests;
- TypeScript;
- Redux selectors;
- Responsive css;
