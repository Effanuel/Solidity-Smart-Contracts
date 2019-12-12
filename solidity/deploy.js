const { bytecode, abi } = require("./compile");
var Web3 = require("web3");
var web3 = new Web3();

// const interface = [
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

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("accounts", accounts[0]);
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  // 0xfAd6DA8D9e4cB2346eEa1AD5e6274BA2dEc93001
  console.log("deployed to", result.options.address);
  console.log(abi, "interface");
};
deploy();
