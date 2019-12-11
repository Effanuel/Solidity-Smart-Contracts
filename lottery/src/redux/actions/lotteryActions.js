import {
  LOADING,
  ENTER_SUCCESS,
  ENTER_ERROR,
  GET_BALANCE_SUCCESS,
  GET_PLAYERS_SUCCESS,
  GET_MANAGER_SUCCESS
} from "./actions";

import web3 from "../../web3";
import lottery from "../../lottery";

// case GET_BALANCE:
// return { ...state };
// case GET_PLAYERS:
// return { ...state };
// case GET_MANAGER:
// return { ...state };

export const enterLottery = () => async dispatch => {
  try {
    dispatch(loading());
    ///
    dispatch(enterSuccess());
  } catch (error) {
    dispatch(enterError());
  }
};

// const players = await lottery.methods.getPlayers().call();
// const balance = await web3.eth.getBalance(lottery.options.address);

export const getBalance = () => async dispatch => {
  try {
    dispatch(loading());
    const balance = await web3.eth.getBalance(lottery.options.address);

    dispatch(getBalanceSuccess(balance));
  } catch (error) {
    dispatch(enterError());
  }
};

export const getPlayers = () => async dispatch => {
  try {
    dispatch(loading());
    console.log("loading palyers");
    const response = await lottery.methods.getPlayers().call();
    dispatch(getPlayersSuccess(response));
    console.log(response, "players");
  } catch (error) {
    dispatch(enterError());
  }
};

export const getManager = payload => async dispatch => {
  try {
    dispatch(loading());
    const response = await lottery.methods.manager().call();
    dispatch(getManagerSuccess(response));
    console.log(response, "manager");
  } catch (error) {
    dispatch(enterError());
  }
};

const enterSuccess = payload => {
  return {
    type: ENTER_SUCCESS,
    payload
  };
};

const getManagerSuccess = payload => {
  return {
    type: GET_MANAGER_SUCCESS,
    payload
  };
};

const getPlayersSuccess = payload => {
  return {
    type: GET_PLAYERS_SUCCESS,
    payload
  };
};

const getBalanceSuccess = payload => {
  return {
    type: GET_BALANCE_SUCCESS,
    payload
  };
};

const enterError = payload => {
  return {
    type: ENTER_ERROR,
    payload
  };
};

const loading = payload => {
  return {
    type: LOADING,
    payload
  };
};
