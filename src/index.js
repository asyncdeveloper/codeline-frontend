import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Weather from "./components/Weather/Weather";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={App} />
            <Route exact={true} path="/weather/:woeid" component={Weather} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
