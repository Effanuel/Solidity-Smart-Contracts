import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import lotteryReducer from "../reducers/lotteryReducer";

const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
  lottery: lotteryReducer
});

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
export { store };
