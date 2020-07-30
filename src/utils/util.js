export const checkResponseData = response => response.ok && (response.status >= 200 && response.status <= 207);

export const numberComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const tierConverter = (tier, division) => {
    if (tier === 'Challenger' || tier === 'Grandmaster' || tier === 'Master') return tier;

    const divisions = {
        'i': 1,
        'ii': 2,
        'iii': 3,
        'iv': 4
    }
    return `${tier} ${divisions[division]}`;
};

export const rateCalculator = (data) => {
    const { cs, kills, assists, deaths, wins, games } = data;

    const csRate = (cs / games).toFixed(1);
    const killRate = (kills / games).toFixed(1);
    const assistRate = (assists / games).toFixed(1);
    const deathRate = (deaths / games).toFixed(1);
    const kdaScore = ((kills + assists) / deaths).toFixed(2);
    const winRate = Math.round((wins / games) * 100);

    return {
        csRate, killRate, assistRate, deathRate, kdaScore, winRate
    }
}

export const kdaColorPicker = (kda) => {
    if (kda >= 5) return '#e19205';
    if (kda >= 4) return '#1f8ecd';
    if (kda >= 3) return '#2daf7f';
    return null;
}