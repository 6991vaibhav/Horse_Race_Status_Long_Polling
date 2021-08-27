import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import raceReducer from "./reducers/race";
import loginReducer from "./reducers/login";
import initialState from "./reducers/initialState";

const rootReducer = combineReducers({
  login: loginReducer,
  race: raceReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);

export default store;
