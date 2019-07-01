import React from "react"
import { Route, Switch } from "react-router-dom"
import { userContext, useAuth, authHandler } from "./hooks/useAuth"

import PrivateRoute from "./components/PrivateRoute"

import AuthPage from "./views/AuthPage"
import Landing from "./views/Landing"
import UserDashboard from "./views/UserDashboard"
import OnBoarding from "./views/OnBoarding"

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
  if (reducer.state.onBoardUser) {
    return (
      <userContext.Provider value={reducer}>
        <OnBoarding />
      </userContext.Provider>
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
