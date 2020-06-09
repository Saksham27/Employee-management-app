import React, { Component } from 'react'
import {Router, Switch, Route } from 'react-router-dom'

import Home from './../components/Home';
import Login from './../components/Login';
import UserDashboard from './../components/UserDashboard'
import AdminDashboard from './../components/AdminDashboard'
import history from './history'
import Register from '../components/Register';
import UpdateInfo from '../components/UpdateInfo';

export default class Routes extends Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Register" exact component={Register} />
                    <Route path="/UserDashboard" exact component={UserDashboard} />
                    <Route path="/AdminDashboard" exact component={AdminDashboard} />
                    <Route path="/update" exact component={UpdateInfo} />

                </Switch>
            </Router>
        )
    }
}
