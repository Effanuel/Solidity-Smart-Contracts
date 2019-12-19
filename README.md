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

- Host a lottery were other users with valid wallet addresses can enter;
- The winner splits the pot.

### Built With

The Backend was built using **Node + Solidity + Truffle + Ganache** and the Frontend, **React + Redux**. Styled components were taken from **React Bootstrap**. Connection between backend and frontend is made with [Metamask.](https://metamask.io/)

- [Node](https://nodejs.org/en/) + [Solidity](https://github.com/ethereum/solidity) + [Truffle](https://github.com/trufflesuite/truffle) + [Ganache](https://www.trufflesuite.com/ganache)
- [React](https://reactjs.org/) + [Redux](https://redux.js.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)

<!-- GETTING STARTED -->

## Getting Started

1. **Start Ganache:**
   * Create and load a workspace
     * When selecting a workspace, set port to be **8545** and not 7545;
2. **Start Metamask:**
   * Connect to `http://localhost:8545`
3. **Select the top wallets from Ganache**
   * Import them into Metamask using private keys *(they should have 100ETH each)*
4. **Deploy contracts:**
   * Go to `solidity` folder
   * `truffle migrate --reset` *(compiled files will appear in `build` folder)*
5. After you deploy

### Prerequisites

- [Nodejs](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads) _(for cloning the repository)_
- [Truffle](https://github.com/trufflesuite/truffle)
- [Ganache](https://www.trufflesuite.com/ganache)
- [Metamask](https://metamask.io/)

### Installation

1. Clone the repo or [download zip]():

```sh
git clone https://github.com/Effanuel/MERN/archive/v1.0.zip
cd MERN/lottery
```

2. Install NPM packages:

```sh
npm install
```

3. Build the application:

```sh
npm run build
```

<!-- USAGE EXAMPLES -->

#### TLDR setup:

```sh
git clone https://github.com/Effanuel/MERN/archive/v1.0.zip
cd MERN/backend
npm run init:packages
npm run build
npm run prod
```

## Usage

##### Run application:

```sh
cd MERN/backend
npm run prod
```

## Roadmap

- Proper tests;
- Fix types;