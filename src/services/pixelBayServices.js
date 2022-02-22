import axios from "axios";
import config from '../config.json';

export function getResults(q, page){
    const api = `${config.pxApiRootURL}/?key=${config.pxApiKey}&q=${q}&page=${page}&per_page=${config.perPage}`;
    let promise = axios.get(api);
    console.log(promise);
    return promise;

}