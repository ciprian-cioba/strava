import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {api} from './api/strava';


class Square extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }
    async componentDidMount() {
        const show = await api();
        this.setState({ data: show.data})

    }
    render() {
        return (
        <ul>
           Result of calling strava api /athlete endpoint
          { Object.keys(this.state.data).map(e => <li>{e} : {this.state.data[e]}</li>)}
        </ul>
        )

    }
}


// ========================================

ReactDOM.render(<Square />, document.getElementById("root"));



