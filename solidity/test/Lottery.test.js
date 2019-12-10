const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { interface, bytecode } = require("../compile");

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

let lottery;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Lottery", () => {
  it("deploys the contract", () => {
    assert.ok(lottery.options.address);
  });

  it("allows account to enter", async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei("0.011", "ether")
    });
    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });
    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });
});
