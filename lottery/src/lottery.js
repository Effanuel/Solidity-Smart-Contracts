import web3 from "./web3";

const lotteryJSON = require("./Lottery.json");
const address = "0xfDB1daDcAA26d6eCEB3e30008679fB3Ded530D53";
// const ropsten = "0x70d7456D17605E875B053a2df9f2fec41D900Ef5";
export default new web3.eth.Contract(lotteryJSON.abi, address);
