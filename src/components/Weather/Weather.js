import React, { Component } from 'react';
import './Weather.css';
import {Link} from "react-router-dom";

const API = 'https://catchupng.000webhostapp.com/weather.php?command=location&woeid=';

class Weather extends Component {

    constructor(){
        super();
        this.state = {
            isLoaded: false,
            data: []
        };
    }

    getWeather = async (CITY) => {
        const api_call = await fetch(API+CITY);
        const response = await api_call.json();
        this.setState({
            isLoaded: true,
            data : response
        });
    }

    componentDidMount(){
        if(this.props.data){
            return;
        }
        if(this.props.match.params.woeid){
            this.getWeather(this.props.match.params.woeid);
        }
    }

    render() {
        if(this.props.data){
            let weatherDetails = this.props.data;
            let weather = weatherDetails.consolidated_weather;
            let lastTemp = weather[weather.length-1];
            return (
                <ul>
                    <Link to={'/weather/' + weatherDetails.woeid} >{weatherDetails.title}</Link>
                    <p>
                        Temperature : {lastTemp.the_temp} centigrade
                    </p>
                    <p>
                        Min Temperature : {lastTemp.min_temp} centigrade
                    </p>
                    <p>
                        Max Temperature : {lastTemp.max_temp} centigrade
                    </p>
                </ul>
            )
        } else{
            if(this.state.isLoaded){
                let weatherDetails = this.state.data;
                let weather = weatherDetails.consolidated_weather;
                let lastTemp = weather[weather.length-1];
                return (
                    <ul>
                        <b> {weatherDetails.title} </b>
                        <p>
                            Temperature : {lastTemp.the_temp} centigrade
                        </p>
                        <p>
                            Min Temperature : {lastTemp.min_temp} centigrade
                        </p>
                        <p>
                            Max Temperature : {lastTemp.max_temp} centigrade
                        </p>
                    </ul>
                )
            }else {
                return (
                    <div className="App">
                        Loading
                    </div>
                )
            }
        }
    }
}
export default Weather;
