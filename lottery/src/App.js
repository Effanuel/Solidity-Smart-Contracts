import React from "react";
import { connect } from "react-redux";
import { getManager, getPlayers } from "./redux/actions/lotteryActions";

import web3 from "./web3";

import "./App.css";
import lottery from "./lottery";

const initialState = {
  value: "",
  message: ""
};
class App extends React.Component {
  state = initialState;

  async componentDidMount() {
    this.props.getManager();
    this.props.getPlayers();
    // const balance = await getBalance();
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleEnter = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waitin..." });
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, "ether")
    });

    this.setState({ message: "Entered" });
  };

  handlePickWinner = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waitin..." });

    await lottery.methods.winner().send({
      from: accounts[0]
    });

    this.setState({ message: "A winner is picked." });
  };
  render() {
    const { players, value, message } = this.state;
    const { manager, playersLength, balance } = this.props;
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is managed by {manager}.</p>
        <p>There are currently {playersLength} people entered, competing to</p>
        <p>win {web3.utils.fromWei(balance, "ether")} ether!</p>
        <hr />

        <form onSubmit={this.handleEnter}>
          <h4>Try your luck!</h4>
          <div>
            <label>Enter Amount to enter</label>
            <input
              id="value"
              // type="number"
              // pattern="*[0-9]"
              value={value}
              onChange={this.handleChange}
            ></input>
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h4> Pick a winner</h4>
        <button onClick={this.handlePickWinner}>Winner</button>
        <hr />
        <h1>{message}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.lottery.loading,
  manager: state.lottery.manager,
  playersLength: state.lottery.players.length,
  balance: state.lottery.balance
});

export default connect(mapStateToProps, { getManager, getPlayers })(App);
