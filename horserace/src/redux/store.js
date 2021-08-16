import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from 'redux-logger'
import { raceReducer } from './reducers/raceReducer'
import { loginReducer } from './reducers/loginReducer'
import { initialState } from "./reducers/initalState";

const rootReducer = combineReducers({
    login: loginReducer,
    race: raceReducer
  });
  
  export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );