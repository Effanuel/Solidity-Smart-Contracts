import {
  LOADING,
  ENTER_SUCCESS,
  ENTER_ERROR,
  GET_BALANCE_SUCCESS,
  GET_PLAYERS_SUCCESS,
  GET_MANAGER_SUCCESS
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
      return { ...state, loading: true };
    case ENTER_SUCCESS:
      return { ...state };
    case ENTER_ERROR:
      return { ...state, error: payload };
    case GET_BALANCE_SUCCESS:
      return { ...state, balance: payload };
    case GET_PLAYERS_SUCCESS:
      return { ...state, players: payload };
    case GET_MANAGER_SUCCESS:
      return { ...state, manager: payload };
    default:
      return state;
  }
};
