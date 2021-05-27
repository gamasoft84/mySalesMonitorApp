import modelsData from "../data/modelsData";
import { fetchConToken } from "./fetchCMS";

export const getCovers = async() => {
    const resp = await fetchConToken('data/images/covers');
    let data = await resp.json();
    if(data && data.length > 1){
        data.sort((a, b) => b.year - a.year);
    }

    data = data.map(function(c){
        let model = modelsData.filter(m => m.code === c.model)[0];
        let title = model ? model.name : 'DESCONOCIDO';
        return {...c, title}
    });

    return data;
}

export const getImagesByModelByYear = async(model,year) => {
    const resp = await fetchConToken(`data/images/${model}/${year}`);
    const data = await resp.json();
    return data;
}