import { API } from '@constants/url';
import { get } from '@utils/request';

const GET_DATA_SUCCESS = 'summoner/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'summoner/GET_DATA_ERROR';

export const getSummonerData = summonerName => dispatch => {
    if (get(API.GET_SUMMONER(summonerName), dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR)) {
        console.log("gdgd");
    };
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
