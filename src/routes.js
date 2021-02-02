import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Editor from './Components/Editor/Editor'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dash' component={Dashboard}/>
        <Route path='/editor' component={Editor}/>
    </Switch>
)