import {api, auth} from "../../api/strava";
import { expect } from 'chai';

describe('Strava API', () => {

    it('/GET athelete', async () => {
        const instance = api(await auth())
        const show = await instance({
            method: 'get',
            url: `athlete`
        })
        expect(show.data.lastname).to.eql('Cioba')
    })

});

