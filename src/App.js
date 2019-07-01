import React from "react";
import { Route } from "react-router";
import { withRouter } from "react-router";
import { useAuth } from "./hooks/useAuth";

function App(){
    const state = useAuth( props.history );
    return ( <div>
        <h1>Firebase Template</h1>
        <Route exact path='/' render={ props => <h1>root</h1> }/>
        <Route path='/login' render={ props => <Login { ...props } /> }/>
        <Route path='/signup' render={ props => <Login { ...props } /> }/>
        <Route exact path='/home' render={ props => <h1>home</h1> }/>
        <Route path={ "/dashboard" }
               render={ props => <Dashboard { ...props } /> }/>
    </div> );
}

export default withRouter( App );
