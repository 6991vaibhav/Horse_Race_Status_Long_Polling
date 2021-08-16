import { initialState } from "./initalState";

export const raceReducer = (state = initialState.race, action) => {
    switch (action.type) {
        case 'UPDATE_HORSE_STATUS': {
            return {
                ...state,
                data: action.payload,
            }
        }
        default:
            return state;
    }
}