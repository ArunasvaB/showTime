import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Error from "./Error";
import Artist from "./Artist";
import Reviews from "./Reviews";

ReactDOM.render(

    <Router>
        <Switch>

            <Route exact path="/">
                <App/>
            </Route>

            <Route exact path="/artists">
                <Artist/>
            </Route>

            <Route path="/artists">
                <Reviews/>
            </Route>

            <Route path="/">
                <Error/>
            </Route>






        </Switch>
    </Router>,

  document.getElementById('home')

);

