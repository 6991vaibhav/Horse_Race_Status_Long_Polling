import axios from "axios";
import { updateRaceStatus } from "../../helpers/utils";
import { BASE_URL } from "../../helpers/constants";
import { loginToRaceDashboard } from "./loginActions";
import { UPDATE_HORSE_STATUS } from "./actionTypes";

export const updateHorseStatus = (data) => ({
  type: UPDATE_HORSE_STATUS,
  payload: data,
});

export const fetchRaceStatus = async (token) => {
  const url = `${BASE_URL}/results`;
  try {
    const response = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response;
  } catch {
    return false;
  }
};

export const getRaceStatus = () => async (dispatch, getState) => {
  const state = getState();
  const { token, email, password } = state.login.data;
  const raceStatusData = state.race.data;
  const res = await fetchRaceStatus(token);
  if (res.status === 204) {
    dispatch(getRaceStatus());
  } else if (res.status === 200 && !res.data.error) {
    const nextRace =
      res.data.event === "start" &&
      raceStatusData.some((item) => item.endTime !== null);
    if (nextRace) {
      // clear the previous race status data
      dispatch(updateHorseStatus([]));
    }
    // get sorted list of statuses
    const updatedStatusList = updateRaceStatus(
      nextRace ? [] : raceStatusData,
      res.data
    );
    dispatch(updateHorseStatus(updatedStatusList, dispatch));
    dispatch(getRaceStatus());
  } else {
    loginToRaceDashboard({
      email,
      password,
    }).then(() => dispatch(getRaceStatus()));
  }
};
