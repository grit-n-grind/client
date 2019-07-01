<<<<<<< HEAD
import React from "react";
import {Route} from "react-router";
import {withRouter} from "react-router";
import {useAuth} from "./hooks/useAuth";

import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Landing from "./views/Landing";
import UserDashboard from "./views/UserDashboard";
import "./styles/index1.scss";

function App(props) {
  const state = useAuth(props.history);
  return (
    <div>
      <Route exact path="/" render={props => <Landing {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/signup" render={props => <SignUp {...props} />} />
      <Route exact path="/home" render={props => <h1>home</h1>} />
      <Route
        path={"/dashboard"}
        render={props => <UserDashboard {...props} />}
      />
    </div>
  );
}

export default withRouter(App);
=======
import React from "react"
import { Route, Switch } from "react-router-dom"
import { userContext, useAuth, authHandler } from "./hooks/useAuth"

import PrivateRoute from "./components/PrivateRoute"

import AuthPage from "./views/AuthPage"
import Landing from "./views/Landing"
import UserDashboard from "./views/UserDashboard"

export default function App() {
  const reducer = useAuth()
  console.log(reducer.state)
  if (reducer.state.initializing) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }
  return (
    <userContext.Provider value={reducer}>
      {reducer.state.auth && <button onClick={authHandler}>Logout</button>}
      <Switch>
        <Route exact path="/login" render={props => <AuthPage {...props} />} />
        <Route exact path="/signup" render={props => <AuthPage {...props} />} />
        <PrivateRoute exact path="/dashboard" component={UserDashboard} />
        <Route exact path="/" render={props => <Landing {...props} />} />
      </Switch>
    </userContext.Provider>
  )
}
>>>>>>> 5c81440567e2d37437a695bec836ee3679764ea7
