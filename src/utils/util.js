export const checkResponseData = response => response.ok && (response.status >= 200 && response.status <= 207);

export const getNumberComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const getTierName = (tier, division) => {
    if (tier === 'Challenger' || tier === 'Grandmaster' || tier === 'Master') return tier;
    const divisions = {
        'i': 1,
        'ii': 2,
        'iii': 3,
        'iv': 4
    }
    return `${tier} ${divisions[division]}`;
};

export const calculateRate = (data) => {
    const { cs, kills, assists, deaths, wins, games } = data;
    const csRate = (cs / games).toFixed(1);
    const killRate = (kills / games).toFixed(1);
    const assistRate = (assists / games).toFixed(1);
    const deathRate = (deaths / games).toFixed(1);
    const kdaScore = ((kills + assists) / deaths).toFixed(2);
    const winRate = Math.round((wins / games) * 100);
    return { csRate, killRate, assistRate, deathRate, kdaScore, winRate };
};

export const getKdaScoreColor = (kda) => {
    if (kda >= 5) return '#e19205';
    if (kda >= 4) return '#1f8ecd';
    if (kda >= 3) return '#2daf7f';
    return null;
};

export const getWinRateColor = (winRate) => {
    if (winRate >= 60) return '#c6443e';
    return null;
};

export const translatePositionName = (position) => {
    switch (position) {
        case 'TOP':
            return '탑';
        case 'JNG':
            return '정글';
        case 'MID':
            return '미드';
        case 'ADC':
            return '원딜';
        case 'SUP':
            return '서폿';
        default:
            break;
    }
};

export const getGameResult = (gameLength, isWin) => {
    const resultClassName = gameLength <= 300 ? "re-game" : isWin ? "win-game" : "loss-game";
    switch (resultClassName) {
        case 'win-game':
            return { resultClassName, resultText: '승리' };
        case 'loss-game':
            return { resultClassName, resultText: '패배' };
        case 're-game':
            return { resultClassName, resultText: '다시하기' };
        default:
            break;
    }
};