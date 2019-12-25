const { bytecode, abi } = require("./compile");
const HDWalletProvider = require("truffle-hdwallet-provider");
const { mnemonic, endpoint } = require("./config-ropsten.json");
var Web3 = require("web3");
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"));
// web3.setProvider(new HDWalletProvider(mnemonic, endpoint));

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
