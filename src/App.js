import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { userContext, useAuth } from "./hooks/useAuth"
import loader from "./assets/loader.svg"
// Componentss
import PrivateRoute from "./components/PrivateRoute"

// Views
import Landing from "./views/Landing"
import AuthPage from "./views/AuthPage"
import OnBoarding from "./views/OnBoarding"
import AddJournal from "./views/AddJournal"
import UserDashboard from "./views/UserDashboard"
import SingleGym from "./views/SingleGym"
import Loader from "./Loader"

import OwnerDashboard from "./views/OwnerDashboard"

export default function App() {
  const reducer = useAuth()
  console.log(reducer.state)
  if (reducer.state.initializing) {
    return (
      <div className="loader">
        {/* <h3>Loading...</h3> */}
        <img src={loader} alt="loader" className="loader_img" />
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
      <Switch>
        <PrivateRoute exact path="/dashboard" component={UserDashboard} />
        <PrivateRoute exact path="/journals/new" component={AddJournal} />
        <Route exact path="/login" render={props => <AuthPage {...props} />} />
        <Route
          exact
          path="/register"
          render={props => <AuthPage {...props} />}
        />
        <Route path="/loader" component={Loader} />
        <Route exact path="/" render={props => <Landing {...props} />} />
        <Route
          exact
          path="/gym/:slug"
          render={props => <OwnerDashboard {...props} />}
        />
        <Redirect to="/dashboard" />
      </Switch>
    </userContext.Provider>
  )
}
