import { API } from '@constants/url';
import { LOCAL_STORAGE_KEY } from '@constants/constant';
import { get } from '@utils/request';
import { getTierName } from "@utils/util";

const GET_DATA_SUCCESS = 'summoner/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'summoner/GET_DATA_ERROR';

export const getSummonerData = summonerName => async dispatch => {
    const { summoner } = await get(API.GET_SUMMONER(summonerName), dispatch, GET_DATA_SUCCESS, GET_DATA_ERROR);
    if (!summoner) return;

    const { name, profileImageUrl, leagues } = summoner;
    const { tier, division, lp } = leagues[0].tierRank;
    const tierInfo = getTierName(tier, division);

    let searchHistory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH_HISTORY));
    if (!searchHistory) searchHistory = [];

    const data = { name, profileImageUrl, tierInfo, lp };
    const _searchHistory = searchHistory.filter(data => data.name !== name);
    _searchHistory.unshift(data);
    localStorage.setItem(LOCAL_STORAGE_KEY.SEARCH_HISTORY, JSON.stringify(_searchHistory));
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
