import { API } from '@constants/url';
import { checkResponseData } from '@utils/util';

const GET_DATA_SUCCESS = 'match/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'match/GET_DATA_ERROR';

export const getMatchData = summonerName => async dispatch => {
    try {
        const response = await fetch(API.GET_MATCH(summonerName));
        if (!checkResponseData(response)) throw (new Error(response.status));
        const data = await response.json();
        dispatch({ type: GET_DATA_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_DATA_ERROR, payload: error });
    }
}

const initialState = {
    matchData: null,
    error: null,
}

const match = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                matchData: action.payload,
            }
        case GET_DATA_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        default:
            return state;
    }
}

export default match;