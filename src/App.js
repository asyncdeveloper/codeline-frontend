import React, { Component } from 'react';
import './App.css';
import Weather from "./components/Weather/Weather";

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
        this.state = {
            isLoaded: false,
            data: []
        };
    }

    getWeather = async (CITY) => {
        const api_call = await fetch(API+CITY);
        const response = await api_call.json();
        this.state.data.push(response);
        if(this.state.data.length === 6){
            this.setState({
                isLoaded: true,
                data : this.state.data
            });
        }else{
            this.setState({
                data : this.state.data
            });
        }

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
        if(this.state.isLoaded){
            return (
                <div className="App">
                    {
                        this.state.data.map(el => (
                            <Weather key={el.woeid} data={el} />
                        ))
                    }
                </div>
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

export default App;
