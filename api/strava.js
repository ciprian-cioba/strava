const axios = require("axios");
const config = require("config");
const fs = require("fs");
(async () => {
    
    const auth = await axios({
        method: 'post',
        baseURL: 'https://www.strava.com/api/v3/oauth/token',
        data: {
            grant_type: 'authorization_code',
            code: '36947ddb22ce6d4cb3c670c23da7e5eea28470e0',
            client_id: config.strava.ID,
            client_secret: config.strava.secret
        }
    })
    const api = axios.create({
        baseURL : 'https://www.strava.com/api/v3/',
        headers: {
            Accept: "application/json",
            withCredentials: true,
            authorization: `Bearer ${auth.data.access_token}`
        },
    })
    const show = await api({
        method: 'get',
        url: `athlete`
    });
    fs.writeFileSync('log.out', JSON.stringify(show.data, null, 2));
})();