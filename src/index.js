import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {api, auth} from './api/strava';


class Square extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }
    async componentDidMount() {
        const instance = api(await auth());
        const show = await instance({
            method: 'get',
            url: `athlete`
        });
        this.setState({ data: show.data})

    }
    render() {
        return (
        <ul>
          { Object.keys(this.state.data).map(e => <li>{e} : {this.state.data[e]}</li>)}
        </ul>
        )

    }
}


// ========================================

ReactDOM.render(<Square />, document.getElementById("root"));



