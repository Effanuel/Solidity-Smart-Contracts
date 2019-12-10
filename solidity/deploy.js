const { bytecode, interface } = require("./compile");
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
  const result = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("deployed to", result.options.address);
  console.log(interface, "interface");
  //   if (typeof web3 !== "undefined") {
  //     App.web3Provider = web3.currentProvider;
  //     web3 = new Web3(web3.currentProvider);
  //   } else {
  //     window.alert("Please connect to Metamask.");
  //   }
  //   // Modern dapp browsers...
  //   if (window.ethereum) {
  //     window.web3 = new Web3(ethereum);
  //     try {
  //       // Request account access if needed
  //       await ethereum.enable();
  //       // Acccounts now exposed
  //       const accounts = await web3.eth.getAccounts();
  //       console.log("deploy from acoount", accounts[0]);
  //       await new web3.eth.contract(JSON.parse(interface))
  //         .deploy({
  //           data: bytecode
  //         })
  //         .send({ gas: "1000000", from: accounts[0] });
  //     } catch (error) {
  //       // User denied account access...
  //     }
  //   }
  //   // Legacy dapp browsers...
  //   else if (window.web3) {
  //     App.web3Provider = web3.currentProvider;
  //     window.web3 = new Web3(web3.currentProvider);
  //     // Acccounts always exposed
  //     const accounts = await web3.eth.getAccounts();
  //     console.log("deploy from acoount", accounts[0]);
  //   }
  //   // Non-dapp browsers...
  //   else {
  //     console.log(
  //       "Non-Ethereum browser detected. You should consider trying MetaMask!"
  //     );
  //   }
};
deploy();
