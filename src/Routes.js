import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import UserList from "./UserList/UserList";
import Home from "./Home/Home";
import history from './history';
import Reservation from "./reservation"
import AddUser from "./addUser/AddUser";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/UserList" component={UserList} />
                    <Route path ="/addUser" component={AddUser} />
                </Switch>
            </Router>
        )
    }
}
