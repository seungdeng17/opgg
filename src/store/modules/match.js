import { API } from '@constants/url';
import { checkResponseData } from '@utils/util';

const CHANGE_FILTER_TYPE = 'match/CHANGE_FILTER_TYPE';
const GET_DATA_SUCCESS = 'match/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'match/GET_DATA_ERROR';

export const changeFilterType = type => ({ type: CHANGE_FILTER_TYPE, payload: type });

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

export const filterType = {
    all: 'all',
    soloRank: 'solo',
    teamRank: 'team',
}

const initialState = {
    filterType: filterType.all,
    matchData: null,
    error: null,
}

const match = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FILTER_TYPE:
            return {
                ...state,
                filterType: action.payload,
            }
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