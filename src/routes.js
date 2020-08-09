// src/routes.js
import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from "./App";
import Register from "./register/Register";
import Showdata from "./showdata/Showdata";

export default class Routes extends Component{
    render() {
        return(
            <BrowserRouter>
                <Route path="/" component={App} />
		
            </BrowserRouter>
        );
    }
};

