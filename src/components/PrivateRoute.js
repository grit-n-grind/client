import React from "react"

import { Redirect, Route } from "react-router-dom"
import { useSession } from "../hooks/useAuth"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { auth } = useSession()
  if (auth) {
    return <Route {...rest} render={props => <Component {...props} />} />
  }
  return <Redirect to="/login" />
}
