import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import About from './About/About';
import Contact from './Contact/Contact';
import UserList from './components/UserList/UserList';
import Home from './Home/Home';
import history from './history';
import AddUser from './components/AddUser/AddUser';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/userlist" component={UserList} />
          <Route exact path="/user" component={AddUser} />
          <Route path="/user/:id" component={AddUser} />
        </Switch>
      </Router>
    );
  }
}
