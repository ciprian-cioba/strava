import {api, auth} from "../../api/strava";

describe('Strava API', () => {

    it('/GET athelete', async () => {
        const show = await api()
        expect(show.data.lastname).toBe('Cioba')
    })

});

