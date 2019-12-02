import axios from "axios";
import config from "../config/default.js";
export async function auth(){
    const res = await axios({
        method: 'post',
        baseURL: 'https://www.strava.com/api/v3/oauth/token',
        data: {
            grant_type: 'authorization_code',
            code: '36947ddb22ce6d4cb3c670c23da7e5eea28470e0',
            client_id: config.strava.ID,
            client_secret: config.strava.secret
        },
    })
    return res.data.access_token;
}
export function api(token) {
    
    return axios.create({
        baseURL : 'https://www.strava.com/api/v3/',
        headers: {
            Accept: "application/json",
            withCredentials: true,
            Authorization: `Bearer ${token}`
        },
    });
}

// module.exports = {api, auth};