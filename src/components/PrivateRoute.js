import React from "react"

import { Redirect, Route } from "react-router-dom"
import { useSession } from "../hooks/useAuth"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { auth, gettingData } = useSession()
  if (auth && !gettingData) {
    return <Route {...rest} render={props => <Component {...props} />} />
  }
  return <Redirect to="/login" />
}
