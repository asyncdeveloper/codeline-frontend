import React, { Component } from 'react';
import './App.css';
import Weather from "../Weather/Weather";

const API = 'https://catchupng.000webhostapp.com/weather.php?command=location&woeid=';
const INSTANBUL_CITYID = '2344116';
const BERLIN_CITYID = '638242';
const LONDON_CITYID = '44418';
const HELSINKI_CITYID = '565346';
const DUBLIN_CITYID = '560743';
const VANCOUVER_CITYID = '9807';

class App extends Component {
    constructor(){
        super();
        this.state ={};
    }

    getWeather = async (CITY) => {
        const api_call = await fetch(API+CITY);
        const response = await api_call.json();
        this.setState({
           response
        });
    };

    componentDidMount(){
        this.getWeather(INSTANBUL_CITYID);
        this.getWeather(BERLIN_CITYID);
        this.getWeather(LONDON_CITYID);
        this.getWeather(HELSINKI_CITYID);
        this.getWeather(DUBLIN_CITYID);
        this.getWeather(VANCOUVER_CITYID)
    }

    render() {
        let json = this.state;
        let arr = [];
        if(Object.keys(json).length > 0) {
            Object.keys(json).forEach(function(key) {
                arr.push(json[key]);
            });

            return(
                <div className="App">
                    <Weather data={arr}  />
                </div>
            )

        }else{
            return(
                <div className="App">
                    Loading
                </div>
            )
        }
    }
}

export default App;
