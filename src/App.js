import React from "react";
import { Route } from "react-router";
import { withRouter } from "react-router";
import { useAuth } from "./hooks/useAuth";

import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Landing from './views/Landing';
import UserDashboard from './views/UserDashboard';

function App(props) {
    const state = useAuth( props.history );
    return ( <div>
        <h1>Firebase Template</h1>
        <Route exact path='/' render={ props => <Landing {...props} /> }/>
        <Route path='/login' render={ props => <Login { ...props } /> }/>
        <Route path='/signup' render={ props => <SignUp { ...props } /> }/>
        <Route exact path='/home' render={ props => <h1>home</h1> }/>
        <Route path={ "/dashboard" }
               render={ props => <UserDashboard { ...props } /> }/>
    </div> );
}

export default withRouter( App );
