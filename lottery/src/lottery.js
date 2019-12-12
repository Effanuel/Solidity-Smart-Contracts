import web3 from "./web3";
const lotteryJSON = require("./Lottery.json");

const address = "0xC84e2F03688baBAd7D198262Ab7eD514b9E37D88";
// const abi = [
//   {
//     inputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "constructor"
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "enter",
//     outputs: [],
//     payable: true,
//     stateMutability: "payable",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "getPlayers",
//     outputs: [
//       {
//         internalType: "address payable[]",
//         name: "",
//         type: "address[]"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "manager",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256"
//       }
//     ],
//     name: "players",
//     outputs: [
//       {
//         internalType: "address payable",
//         name: "",
//         type: "address"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "winner",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   }
// ];

export default new web3.eth.Contract(lotteryJSON.abi, address);
