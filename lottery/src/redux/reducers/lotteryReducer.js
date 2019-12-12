import {
  LOADING,
  ENTER_SUCCESS,
  ENTER_ERROR,
  GET_BALANCE_SUCCESS,
  GET_PLAYERS_SUCCESS,
  GET_MANAGER_SUCCESS,
  GET_WINNER_SUCCESS,
  GET_WINNER_ERROR
} from "../actions/actions";

const initialState = {
  manager: "",
  loading: false,
  message: "",
  players: [],
  balance: "",
  winnter: "",
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true, error: "" };
    case ENTER_SUCCESS:
      return { ...state };
    case ENTER_ERROR:
      return { ...state, error: payload };
    case GET_BALANCE_SUCCESS:
      return { ...state, balance: payload, error: "" };
    case GET_PLAYERS_SUCCESS:
      return { ...state, players: payload, error: "" };
    case GET_MANAGER_SUCCESS:
      return { ...state, manager: payload, error: "" };
    case GET_WINNER_SUCCESS:
      return { ...state, message: payload, error: "" };
    case GET_WINNER_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
