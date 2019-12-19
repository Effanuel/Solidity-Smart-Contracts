import web3 from "./web3";

const lotteryJSON = require("./Lottery.json");
const address = "0x76b97Dbf50986b37238355A31755A3E6829070e7";
// const ropsten = "0x70d7456D17605E875B053a2df9f2fec41D900Ef5";
export default new web3.eth.Contract(lotteryJSON.abi, address);
