import { fetchConToken } from "./fetch";

export const getDataKMM = async(type) => {
    const resp = await fetchConToken(`detail${type}`);
    const data = (await resp.json()).detail;
    if(data && data.length > 1){
        data.sort((a, b) => b.total - a.total);
    }
    return data;
}

//summary section
export const getTotalByDayKMM = async() => {
    const resp = await fetchConToken('countTotalByDay');
    const total = await resp.json();
    return total;
}

//Errors section
export const getCountTotalErrorsByType = async() => {
    const resp = await fetchConToken('getTotalErrorsByType');
    const data = (await resp.json()).detail;
    return data;
}

//Login section
export const getDetailUsersByDealer = async() => {
    const resp = await fetchConToken('detailUsersByDealer');
    const data = (await resp.json()).detail;
    return data;
}
