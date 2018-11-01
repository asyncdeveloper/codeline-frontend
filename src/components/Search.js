import React, { Component } from 'react';
import Weather from "./Weather";

const API = 'https://catchupng.000webhostapp.com/weather.php?command=search&keyword=';
const APIWEATHER = 'https://catchupng.000webhostapp.com/weather.php?command=location&woeid=';

class Search extends Component {

    constructor(){
        super();
        this.state = {
            isLoaded: false,
        };
    }

    getWeather = async (LOCATION) => {
        try {
            const api_call = await fetch(APIWEATHER+LOCATION);
            const response = await api_call.json();
            this.setState({
                isLoaded: true,
                data : [response]
            });
        } catch (err) {
            console.log('failed');
        }
    };

    getLocation = async (LOCATION) => {
        try {
            const api_call = await fetch(API+LOCATION);
            const response = await api_call.json();
            if(Object.keys(response).length > 0){
                return response[0].woeid;
            }
        } catch (err) {
            console.log('failed', err);
        }
    };

    componentDidMount(){
        this.getLocation(this.props.match.params.location).then(woeid => {
            if(woeid === undefined){
                this.setState({
                    isLoaded: true,
                });
            }else{
                this.getWeather(woeid);
            }
        });
    }

    render() {
        if(this.state.isLoaded){
            if(this.state.data){
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
                    <div className="text-center">
                        Could not find report for location
                    </div>
                )
            }
        }else {
            return (
                <div className="App">
                    Loading
                </div>
            )
        }
    }
}

export default Search;