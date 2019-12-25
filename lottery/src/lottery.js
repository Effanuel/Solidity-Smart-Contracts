import web3 from "./web3";

const lotteryJSON = require("./Lottery.json");
const { contract_address } = require("./config.json");

export default new web3.eth.Contract(lotteryJSON.abi, contract_address);
