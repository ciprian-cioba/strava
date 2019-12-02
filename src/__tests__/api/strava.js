import {api, auth} from "../../api/strava";

describe('Strava API', () => {

    it('/GET athelete', async () => {
        const instance = api(await auth())
        const show = await instance({
            method: 'get',
            url: `athlete`
        })
        expect(show.data.lastname).toBe('Cioba')
    })

});

