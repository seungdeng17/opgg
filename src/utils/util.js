export const checkResponseData = response => response.ok && (response.status >= 200 && response.status <= 207);

export const numberComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');