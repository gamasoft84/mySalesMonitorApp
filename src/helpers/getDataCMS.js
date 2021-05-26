import { fetchConToken } from "./fetchCMS";

export const getCovers = async() => {
    const resp = await fetchConToken('data/images/covers');
    const data = await resp.json();
    return data;
}

export const getImagesByModelByYear = async(model,year) => {
    const resp = await fetchConToken(`data/images/${model}/${year}`);
    const data = await resp.json();
    return data;
}