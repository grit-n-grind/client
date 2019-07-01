import React from "react"

import { useSession, authHandler, GOOGLE_AUTH_PROVIDER } from "../hooks/useAuth"

import { Redirect } from "react-router-dom"

export default function AuthPage() {
  const { auth } = useSession()
  console.log(auth)
  if (auth) {
    return <Redirect to="/dashboard" />
  }
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}>
        Google Login
      </button>
    </>
  )
}
