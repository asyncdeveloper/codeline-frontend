import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Weather from "./components/Weather";
import Header from "./components/Header";
import Search from "./components/Search";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact={true} path="/" component={App} />
                <Route exact={true} path="/weather/:woeid" component={Weather} />
                <Route exact={true} path="/search/:location" component={Search} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
