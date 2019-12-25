import React from "react";
import { connect } from "react-redux";
import {
  getTicketCount,
  getAllTicketCount,
  getPlayers,
  getWinner,
  enterLottery
} from "./redux/actions/lotteryActions";

import { manager_address } from "./config.json";
import web3 from "./web3";

import "./App.css";

import {
  ButtonComponent,
  CardComponent,
  SpinnerComponent,
  TitleComponent
} from "./components";

const initialState = {
  value: "",
  message: "",
  currentAccount: "",
  currentBalance: "",
  // manager: "0x1dcf213e1580Aa0268342DDed2453E9Ec8e61225"
  manager: manager_address
};
class App extends React.PureComponent {
  state = initialState;

  async componentDidMount() {
    // this.props.getManager();
    this.props.getPlayers();
    this.props.getAllTicketCount();
    await window.ethereum.on("accountsChanged", this.handleAccountChange);
  }

  handleAccountChange = async accounts => {
    const currentAccount = accounts[0];
    await this.props.getTicketCount(currentAccount);
    if (this.state.currentAccount !== currentAccount) {
      const response = await web3.eth.getBalance(currentAccount);
      const currentBalance = web3.utils.fromWei(response, "ether");
      let currentAccount_set = "";

      if (currentAccount === this.state.manager.toLowerCase()) {
        currentAccount_set = "Lottery Manager";
      } else {
        currentAccount_set = currentAccount;
      }
      this.setState({ currentAccount: currentAccount_set, currentBalance });
    }
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleEnter = async () => {
    this.props.enterLottery();
  };

  handlePickWinner = async () => {
    this.props.getWinner();
  };
  render() {
    const { currentAccount, currentBalance } = this.state;
    const {
      playersLength,
      ticketCount,
      allTicketCount,
      error,
      loading,
      winner
    } = this.props;
    return (
      <div className="main-container">
        <TitleComponent manager={this.state.manager} winner={winner} />
        <div className="player-account-container">
          {currentAccount && (
            <>
              <div className="left-side-container">
                <CardComponent>
                  <div className="titleStyle">
                    Your current balance is{" "}
                    <span>
                      {parseFloat(currentBalance)
                        .toFixed(2)
                        .toString()}
                    </span>{" "}
                    ETH.
                  </div>
                  <div className="descStyle">
                    You are logged in as <span>{currentAccount}</span>.
                  </div>
                </CardComponent>
                <CardComponent>
                  <div className="titleStyle">
                    You have a total of <span>{ticketCount}</span> tickets.
                  </div>
                  <div className="descStyle">
                    You can buy a total of{" "}
                    <span>{parseInt(currentBalance / 0.025).toString()}</span>{" "}
                    tickets.
                  </div>
                </CardComponent>
              </div>
              <div className="middle-size-container">
                <CardComponent cardStyle="Middle" width="20rem">
                  <div className="titleStyle">Enter a lottery!</div>
                  <div className="descStyle">
                    Buy a ticket for
                    <span> 0.025</span> ETH.
                    <ButtonComponent
                      text="ENTER"
                      onClick={this.handleEnter}
                      style={{
                        marginTop: "35px",
                        height: "100px",
                        width: "125px",
                        fontSize: "25px"
                      }}
                    />
                  </div>
                </CardComponent>
              </div>
            </>
          )}
          {currentAccount === "Lottery Manager" && (
            <div className="right-side-container">
              <CardComponent cardStyle="Manager">
                <div className="titleStyle">Manager Settings</div>
                <div className="descStyle">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    Settle this lottery
                    <ButtonComponent
                      style={{
                        marginTop: "10px",
                        height: "50px",
                        width: "150px",
                        fontSize: "20px"
                      }}
                      text="Pick a winner"
                      onClick={this.handlePickWinner}
                    />
                  </div>
                </div>
              </CardComponent>
              <CardComponent cardStyle="Manager">
                <div className="titleStyle">
                  There are a total of <span>{playersLength}</span> people in
                  the pool.
                </div>
                <div className="descStyle">
                  Lottery pool is worth{" "}
                  <span>{parseFloat(allTicketCount * 0.025).toFixed(3)}</span>{" "}
                  ETH.
                </div>
              </CardComponent>
            </div>
          )}
        </div>

        <h1>{error}</h1>
        {loading && <SpinnerComponent />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.lottery.loading,
  ticketCount: state.lottery.tickets,
  allTicketCount: state.lottery.allTickets,
  playersLength: state.lottery.players.length,
  balance: state.lottery.balance,
  winner: state.lottery.winner,
  error: state.lottery.error
});

export default connect(mapStateToProps, {
  getTicketCount,
  getAllTicketCount,
  getPlayers,
  enterLottery,
  getWinner
})(App);
