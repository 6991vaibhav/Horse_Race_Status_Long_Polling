import axios from "axios";
import { BASE_URL } from "../../helpers/constants";
import { UPDATE_LOGIN_TOKEN } from "./actionTypes";

export const loginToRaceDashboard = (loginData) => {
  const url = `${BASE_URL}/auth`;
  return axios.post(url, loginData);
};

export const updateLoginToken = (loginCred) => (dispatch) => {
  dispatch({
    type: UPDATE_LOGIN_TOKEN,
    payload: loginCred,
  });
};
