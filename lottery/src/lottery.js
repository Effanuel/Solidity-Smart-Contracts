import web3 from "./web3";

const lotteryJSON = require("./Lottery.json");
const address = "0x7Ea8E5e61F3326de1dEaa27863CE85543D9E3c4f";

export default new web3.eth.Contract(lotteryJSON.abi, address);
