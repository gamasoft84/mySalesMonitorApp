import { fetchSinToken } from "./fetch";

export const getDataKMM = async(type) => {
    const resp = await fetchSinToken(`/data${type}ByDay`);
    const data = await resp.json();
    if(data && data.length > 1){
        data.sort((a, b) => b.total - a.total);
    }
    return data;
}

//summary section
export const getCountByTypeKMM = async(type) => {
    const resp = await fetchSinToken(`/count${type}ByDay`);
    const total = await resp.json();
    return total;
}

//Errors section
export const getCountTotalErrorsByType = async() => {
    const resp = await fetchSinToken('/countTotalErrorsByType');
    const data = await resp.json();
    return data;
}

//Login section
export const getCountTotalLoginsByDevices = async() => {
    const resp = await fetchSinToken('/dataLoginsByTypeDevicesByDay');
    const data = await resp.json();
    return data;
}
