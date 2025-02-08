import { BASE_URL } from "../utils/constant";

export const apiRequest = async (endPoint, method, body = null, headers = {}) => {
    try {
        const config = {
            method, 
            headers: {
                ...headers,
            },
            body: body instanceof FormData ? body : JSON.stringify(body)
        }

        if(body && !(body instanceof FormData)){
            config.headers['content-type'] = 'application/json';
        }

        //if api request is GET we do not need body
        if(method === 'GET'){
            delete config.body;
        }

        console.log(config, 'config');
        

        const response = await fetch(`${BASE_URL}/${endPoint}`, config);
        const data = await response.json();
        console.log(data, 'data from api request');
        return data;
    } catch (error) {
        console.log(error);
    }
}