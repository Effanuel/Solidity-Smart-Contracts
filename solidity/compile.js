// const path = require("path");
// const fs = require("fs");
// const solc = require("solc");
// const abi = require("solc/abi");

const lotteryJSON = require("./build/contracts/Lottery.json");

// const Path = path.resolve(__dirname, "contracts", "Lottery.sol");
// const src = fs.readFileSync(Path, "utf8");
// // console.log(src);
// // module.exports =

const bytecode = lotteryJSON.bytecode;
const interface = lotteryJSON.abi;

export { bytecode, interface };

// module.exports = {
//   bytecode: bytecode,
//   interface: interface
// };

// var input = {
//   language: "Solidity",
//   sources: {
//     "./contracts/Lottery.sol": {
//       content: `pragma solidity 0.5.13;
//       contract Lottery {
//           address public manager;
//           address payable[] public players;

//           constructor() public {
//               manager = msg.sender;
//           }

//           function genRandom() private view returns(uint256) {
//               return uint256(keccak256(abi.encodePacked(block.difficulty, address(this), players)));
//           }

//           function winner() public restricted {

//               // assert(msg.sender == manager && players.length != 0);
//               uint i = genRandom() % players.length;
//               players[i].transfer(address(this).balance);
//               // Reset players
//               players = new address payable[](0);
//           }

//           function enter() public payable {
//               assert(msg.value > .01 ether);
//               assert(gasleft() < block.gaslimit);
//               players.push(msg.sender);
//           }
//           modifier restricted(){
//               //Only manager can call the function
//               assert(msg.sender == manager);
//               _;
//           }

//           function getPlayers() public view returns(address payable[] memory) {
//               return players;
//           }
//       }`
//     }
//   },

//   settings: {
//     outputSelection: {
//       "*": {
//         "*": ["*"]
//       }
//     }
//   }
// };
// var output = JSON.parse(solc.compile(JSON.stringify(input)));

// const bytecode =
//   output.contracts["./contracts/Lottery.sol"]["Lottery"].evm.bytecode.object;
// console.log(output.contracts["./contracts/Lottery.sol"]);
// var lot = output.contracts["./contracts/Lottery.sol"]["Lottery"];

// console.log(
//   Object.keys(output.contracts["./contracts/Lottery.sol"]["Lottery"])
// );
// Object.keys(lot).forEach(el => {
//   console.log(el.abi);
// });
