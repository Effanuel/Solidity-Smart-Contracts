const lotteryJSON = require("./build/contracts/Lottery.json");

const bytecode = lotteryJSON.bytecode;
const abi = lotteryJSON.abi;

module.exports = {
  bytecode: bytecode,
  abi: abi
};
