import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const axios = require('axios')
// import Axios from 'axios';

class Square extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }
    async componentDidMount() {
        const json = await axios(
            {
                method: 'get',
                baseURL: `https://www.strava.com/api/v3/athlete`,
                headers: {
                    Accept: "application/json",
                    withCredentials: true,
                    authorization: "Bearer 5cc97ef403a36698da006ec0c50f98d0c1925c16"
                },


            }
        )
        console.log(json);
        this.setState({ data: json.data })

    }
    render() {
        return (<div>
            <ul>
          {Object.keys(this.state.data).map(el => (
            <li>
              {el}: {this.state.data}
            </li>
          ))}
        </ul>
        </div>)

    }
}


// ========================================

ReactDOM.render(<Square />, document.getElementById("root"));



