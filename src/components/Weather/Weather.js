import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {

    render() {
        let arr = this.props.data[0];
        let weather = arr.consolidated_weather;
        let lastTemp = weather[weather.length-1];
        return (
            <div className="Weather">
                <b>{arr.title}</b>
                <li>
                    Temperature : {lastTemp.the_temp}
                </li>
                <li>
                    Min Temperature : {lastTemp.min_temp}
                </li>
                <li>
                    Max Temperature : {lastTemp.max_temp}
                </li>
            </div>
        )
    }
}
export default Weather;
