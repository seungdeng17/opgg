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