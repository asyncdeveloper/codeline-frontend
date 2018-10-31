import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {

    render() {
        let weatherDetails = this.props.data;
        let weather = weatherDetails.consolidated_weather;
        let lastTemp = weather[weather.length-1];
        return (
            <ul>
                <b> {weatherDetails.title} </b>
                <p>
                    Temperature : {lastTemp.the_temp}
                </p>
                <p>
                    Min Temperature : {lastTemp.min_temp}
                </p>
                <p>
                    Max Temperature : {lastTemp.max_temp}
                </p>
            </ul>
        )
    }
}
export default Weather;
