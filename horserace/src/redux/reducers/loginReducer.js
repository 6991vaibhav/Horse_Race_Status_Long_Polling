import { initialState } from "./initalState";

export const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_TOKEN":
      return {
        ...state,
        data: action.payload
      }
    default: {
      return state;
    }
  }
}