import { API } from '@constants/url';
import { checkResponseData } from '@utils/util';

const GET_DATA_SUCCESS = 'summoner/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'summoner/GET_DATA_ERROR';

export const getSummonerData = summonerName => async dispatch => {
    try {
        const response = await fetch(API.GET_SUMMONER(summonerName));
        if (!checkResponseData(response)) throw (new Error(response.status));
        const data = await response.json();
        dispatch({ type: GET_DATA_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_DATA_ERROR, payload: error });
    }
};

const initialState = {
    summonerData: null,
    error: null,
};

const summoner = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                summonerData: action.payload.summoner,
                error: null,
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
};

export default summoner;
