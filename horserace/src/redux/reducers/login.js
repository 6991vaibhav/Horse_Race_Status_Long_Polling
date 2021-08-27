import initialState from "./initialState";
import { UPDATE_LOGIN_TOKEN } from "../actions/actionTypes";

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_TOKEN:
      return {
        ...state,
        data: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default loginReducer;
