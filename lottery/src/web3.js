import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider || "http://localhost:8545");

export default web3;
