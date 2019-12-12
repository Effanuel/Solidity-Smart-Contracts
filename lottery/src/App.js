import React from "react";
import { connect } from "react-redux";
import {
  getManager,
  getPlayers,
  getWinner
} from "./redux/actions/lotteryActions";

import web3 from "./web3";

import "./App.css";
import lottery from "./lottery";

const initialState = {
  value: "",
  message: "",
  currentAccount: ""
};
class App extends React.Component {
  state = initialState;

  async componentDidMount() {
    await this.props.getManager();
    this.props.getPlayers();
    window.ethereum.on("accountsChanged", this.handleAccountChange);

    // const balance = await getBalance();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.manager.toLowerCase() === prevState.currentAccount
      ? { currentAccount: "Lottery Manager" }
      : {};
  }

  handleAccountChange = accounts => {
    const currentAccount = accounts[0];
    if (this.state.currentAccount !== currentAccount) {
      if (currentAccount === this.props.manager.toLowerCase()) {
        this.setState({ currentAccount: "Lottery Manager" });
      } else {
        this.setState({ currentAccount });
      }
    }
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleEnter = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waitin..." });
    console.log(accounts);
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei("0.011", "ether")
    });
    console.log("entered");
    this.setState({ message: "Entered" });
  };

  handlePickWinner = async () => {
    this.props.getWinner();
  };
  render() {
    const { players, value, currentAccount } = this.state;
    const { playersLength, balance, message, error } = this.props;
    return (
      <div>
        <h2>Lottery Contract</h2>
        <h3>Current account is {currentAccount}</h3>
        <p>There are currently {playersLength} people entered, competing to</p>
        <p>win {web3.utils.fromWei(balance, "ether")} ether!</p>
        <hr />

        <form onSubmit={this.handleEnter}>
          <h4>Try your luck!</h4>
          <div>
            <label>Buy a ticket for 0.011 eth</label>
          </div>
          <button>Enter</button>
        </form>
        <hr />
        {currentAccount === "Lottery Manager" && (
          <div>
            <h4> Pick a winner</h4>
            <button onClick={this.handlePickWinner}>Winner</button>
            <hr />
          </div>
        )}

        <h1>{message}</h1>
        <h1>{error}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.lottery.loading,
  manager: state.lottery.manager,
  playersLength: state.lottery.players.length,
  balance: state.lottery.balance,
  message: state.lottery.message,
  error: state.lottery.error
});

export default connect(mapStateToProps, { getManager, getPlayers, getWinner })(
  App
);
