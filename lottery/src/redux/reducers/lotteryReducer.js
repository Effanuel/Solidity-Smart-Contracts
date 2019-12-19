import {
  LOADING,
  ENTER_SUCCESS,
  ENTER_ERROR,
  GET_BALANCE_SUCCESS,
  GET_PLAYERS_SUCCESS,
  GET_TICKETS_SUCCESS,
  GET_ALL_TICKETS_SUCCESS,
  GET_WINNER_SUCCESS,
  GET_WINNER_ERROR
} from "../actions/actions";

const initialState = {
  manager: "",
  loading: false,
  message: "",
  players: [],
  tickets: 0,
  allTickets: 0,
  balance: "",
  winner: "",
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true, error: "", winner: "" };
    case ENTER_SUCCESS:
      return { ...state, loading: false, error: "", winner: "" };
    case ENTER_ERROR:
      return { ...state, loading: false, error: payload, winner: "" };
    case GET_BALANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        balance: payload,
        error: "",
        winner: ""
      };
    case GET_PLAYERS_SUCCESS:
      return {
        ...state,
        loading: false,
        players: payload,
        error: "",
        winner: ""
      };
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: payload,
        error: "",
        winner: ""
      };
    case GET_ALL_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        allTickets: payload,
        error: "",
        winner: ""
      };
    case GET_WINNER_SUCCESS:
      return {
        ...state,
        loading: false,
        winner: payload,
        error: ""
      };
    case GET_WINNER_ERROR:
      return { ...state, loading: false, error: payload, winner: "" };
    default:
      return state;
  }
};
