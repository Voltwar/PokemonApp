import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router';
import { Route } from "react-router";
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Locations from './pages/Locations';
import Berries from './pages/Berries';
import Contests from './pages/Contests';
import Games from './pages/Games';
import Items from './pages/Items';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pokemon">
                    <Pokemon />
                </Route>
            </Switch>
            <Switch>
                <Route path="/locations">
                    <Locations />
                </Route>
            </Switch>
            <Switch>
                <Route path="/berries">
                    <Berries />
                </Route>
            </Switch>
            <Switch>
                <Route path="/items">
                    <Items />
                </Route>
            </Switch>
            <Switch>
                <Route path="/contests">
                    <Contests />
                </Route>
            </Switch>
            <Switch>
                <Route path="/games">
                    <Games />
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;