import React from "react";
import { connect } from "react-redux";
import {
  getTicketCount,
  getAllTicketCount,
  getPlayers,
  getWinner,
  enterLottery
} from "./redux/actions/lotteryActions";

import manager_address from "./config";
import web3 from "./web3";

import "./App.css";
import lottery from "./lottery";

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

  handleGetTickets = async () => {
    console.log("a");
  };

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
    this.setState({ [event.target.id]: event.target.value });
  };

  handleEnter = event => {
    this.props.enterLottery();
  };

  handlePickWinner = async () => {
    this.props.getWinner();
  };
  render() {
    const { players, value, currentAccount, currentBalance } = this.state;
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
        <TitleComponent manager={this.state.manager} />
        <div style={{ height: "40px", textAlign: "center" }}>
          {winner && <h3>Winner was picked. Lottery was reset.</h3>}
        </div>
        <div className="player-account-container">
          {currentAccount && (
            <>
              <div className="left-side-container">
                <CardComponent
                  width="33rem"
                  title={
                    <>
                      Your current balance is{" "}
                      <b className="accent-c">
                        {parseFloat(currentBalance)
                          .toFixed(2)
                          .toString()}
                      </b>{" "}
                      ETH.
                    </>
                  }
                  desc={
                    <>
                      You are logged in as{" "}
                      <b className="accent-c">{currentAccount}</b>.
                    </>
                  }
                />

                <CardComponent
                  width="33rem"
                  title={
                    <>
                      You have a total of{" "}
                      <b className="accent-c">{ticketCount}</b> tickets.
                    </>
                  }
                  desc={
                    <>
                      You can buy a total of{" "}
                      <b>{parseInt(currentBalance / 0.025).toString()}</b>{" "}
                      tickets.
                    </>
                  }
                />
              </div>
              <div className="middle-size-container">
                <CardComponent
                  cardStyle="Middle"
                  width="20rem"
                  height="306px"
                  title="Enter a lottery!"
                  desc={
                    <>
                      Buy a ticket for
                      <b className="accent-c" style={{ display: "block" }}>
                        {" "}
                        0.025
                      </b>{" "}
                      ETH.
                    </>
                  }
                >
                  <ButtonComponent
                    text="ENTER"
                    onClick={this.handleEnter}
                    style={{
                      height: "100px",
                      width: "125px",
                      fontSize: "25px"
                    }}
                  />
                </CardComponent>
              </div>
            </>
          )}
          {currentAccount === "Lottery Manager" && (
            <div className="right-side-container">
              <CardComponent
                cardStyle="Manager"
                width="33rem"
                title="Manager Settings"
                desc={
                  <span style={{ display: "flex", flexDirection: "row" }}>
                    Settle this lottery{""}
                    <ButtonComponent
                      style={{
                        marginLeft: "15px",
                        height: "50px",
                        width: "150px",
                        fontSize: "20px"
                      }}
                      text="Pick a winner"
                      onClick={this.handlePickWinner}
                    />
                  </span>
                }
              ></CardComponent>
              <CardComponent
                cardStyle="Manager"
                width="33rem"
                title={
                  <>
                    There are a total of{" "}
                    <b className="accent-c">{playersLength}</b> people in the
                    pool.
                  </>
                }
                desc={
                  <>
                    Lottery pool is worth{" "}
                    <b className="accent-c">{allTicketCount * 0.025}</b> ETH.
                  </>
                }
              ></CardComponent>
            </div>
          )}
        </div>
        {winner && (
          <div>
            <h1>WINNER IS {winner}</h1>
          </div>
        )}

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
