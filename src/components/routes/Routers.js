import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sigin from '../signup/Sigin';
import Signup from '../signup/Signup';
import UserList from '../IAM/UserList';
import CreateUser from '../IAM/CreateUser';
import Home from '../layout/Home';

const Routers = () => { 
    return (
        <Router>
        <Switch>
                <Route exact path="/" component={Sigin} />
                <Route exact path="/signup" component={Signup} />
                 <Route exact path="/home" component={Home} />
                <Route exact path="/users" component={UserList} />
                <Route exact path="/create" component={CreateUser} />
            </Switch>
            </Router>
    )
}

export default Routers;