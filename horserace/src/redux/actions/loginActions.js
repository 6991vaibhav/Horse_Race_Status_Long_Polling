import axios from "axios"
import { BASE_URL } from "../../constants"

export const loginToRaceDashboard = (loginData) => {
  const url = `${BASE_URL}/auth`
  return axios.post(url, loginData)
}

export const updateLoginToken = (loginCred) => dispatch => {
  dispatch({
    type: "UPDATE_LOGIN_TOKEN",
    payload: loginCred,
  })
}