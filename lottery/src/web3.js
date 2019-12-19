import Web3 from "web3";

let web3;

// if (typeof web3 !== "undefined") {
web3 = new Web3(window.web3.currentProvider || "http://127.0.0.1:8545");
// } else {
//   window.alert("Please connect to Metamask.");
// }
export default web3;
