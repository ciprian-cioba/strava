const { api, auth } = require(`../../src/api/strava`);
const { describe, it, before } = require("mocha");
const { expect } = require('chai');

describe('Strava API', () => {
    before(async () => {
        this.instance = api(await auth())
    })

    it('/GET athelete', async () => {
        const show = await this.instance({
            method: 'get',
            url: `athlete`
        })
        console.log(JSON.stringify(show.data))
        expect(show.data.lastname).to.eql('Cioba')
    })

});

