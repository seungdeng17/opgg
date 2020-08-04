const baseURL = 'https://codingtest.op.gg';

export const API = {
    GET_SUMMONER: (summonerName) => `${baseURL}/api/summoner/${summonerName}`,
    GET_MATCH: (summonerName) => `${baseURL}/api/summoner/${summonerName}/matches`,
    GET_MATCH_DETAIL: (summonerName, gameId) => `${baseURL}/api/summoner/${summonerName}/matchDetail/${gameId}`,
    GET_MOST_INFO: (summonerName) => `${baseURL}/api/summoner/${summonerName}/mostInfo`,
}

export const CHAMPION_JSON = 'http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/champion.json';
export const ITEM_JSON = 'http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json';