import { API } from '@constants/url';
import { get } from '@utils/request';

const GET_DATA_SUCCESS = 'match/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'match/GET_DATA_ERROR';

export const getMatchData = summonerName => dispatch => {
    get(API.GET_MATCH(summonerName), dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR);
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
}

export default match;