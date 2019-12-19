import {
  LOADING,
  ENTER_SUCCESS,
  ENTER_ERROR,
  GET_WINNER_ERROR,
  GET_BALANCE_SUCCESS,
  GET_PLAYERS_SUCCESS,
  GET_TICKETS_SUCCESS,
  GET_ALL_TICKETS_SUCCESS,
  GET_WINNER_SUCCESS
} from "./actions";

import web3 from "../../web3";
import lottery from "../../lottery";

export const enterLottery = () => async dispatch => {
  try {
    dispatch(loading());
    ///    console.log("go");
    const accounts = await web3.eth.getAccounts();

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei("0.025", "ether")
    });
    // console.log(response);
    // console.log(tickets, "TOCKLETS");
    dispatch(enterSuccess());
    dispatch(updateState(accounts[0]));
  } catch (error) {
    // console.log(error, "entererrror");
    dispatch(enterError(error));
  }
};

export const updateState = payload => async dispatch => {
  try {
    dispatch(loading());
    dispatch(getPlayers());
    dispatch(getTicketCount(payload));
    dispatch(getAllTicketCount());
    dispatch(enterSuccess());
  } catch (error) {
    dispatch(enterError(error));
  }
};

export const getWinner = () => async dispatch => {
  try {
    dispatch(loading());
    const accounts = await web3.eth.getAccounts();
    const response = await lottery.methods.winner().send({
      from: accounts[0]
    });
    console.log(response);
    dispatch(getWinnerSuccess("Winner was picked."));
  } catch (error) {
    dispatch(getWinnerError(error));
  }
};

// export const getBalance = () => async dispatch => {
//   try {
//     dispatch(loading());

//     const balance = await web3.eth.getBalance(lottery.options.address);
//     console.log(balance, "balance");
//     dispatch(getBalanceSuccess(balance));
//   } catch (error) {
//     dispatch(enterError(error));
//   }
// };

export const getPlayers = () => async dispatch => {
  try {
    dispatch(loading());
    console.log("loading palyers");
    const response = await lottery.methods.getPlayers().call();
    // console.log(response, "ticket count");
    dispatch(getPlayersSuccess(response));
  } catch (error) {
    console.log("GET PLAYERS ERROR");
    dispatch(enterError(error));
  }
};

export const getTicketCount = payload => async dispatch => {
  try {
    dispatch(loading());
    const response = await lottery.methods.getTicketCount(payload).call();
    dispatch(getTicketCountSuccess(response));
    console.log(response, "manager");
  } catch (error) {
    console.log(error, "ERR");
  }
};

export const getAllTicketCount = payload => async dispatch => {
  try {
    dispatch(loading());
    const response = await lottery.methods.getAllTicketCount().call();
    dispatch(getAllTicketCountSuccess(response));
    console.log(response, "manager");
  } catch (error) {
    console.log(error, "ERR");
  }
};

const enterSuccess = payload => {
  return {
    type: ENTER_SUCCESS,
    payload
  };
};

const getTicketCountSuccess = payload => {
  return {
    type: GET_TICKETS_SUCCESS,
    payload
  };
};

const getAllTicketCountSuccess = payload => {
  return {
    type: GET_ALL_TICKETS_SUCCESS,
    payload
  };
};

const getPlayersSuccess = payload => {
  return {
    type: GET_PLAYERS_SUCCESS,
    payload
  };
};

// const getBalanceSuccess = payload => {
//   return {
//     type: GET_BALANCE_SUCCESS,
//     payload
//   };
// };

const getWinnerSuccess = payload => {
  return {
    type: GET_WINNER_SUCCESS,
    payload
  };
};

const enterError = payload => {
  const errors = {
    4001: "User denied access."
  };
  console.log(errors, payload, "errors");
  return {
    type: ENTER_ERROR,
    payload: errors[payload.code]
  };
};

const getWinnerError = payload => {
  const errors = {
    4001: "Manager denied picking a winner! Redistributing balances..."
  };
  console.log(errors[payload.code], "errors");
  return {
    type: GET_WINNER_ERROR,
    payload: errors[payload.code]
  };
};

const loading = payload => {
  return {
    type: LOADING,
    payload
  };
};
