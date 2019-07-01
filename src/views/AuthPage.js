import React from "react"

import { useSession } from "../hooks/useAuth"

import { Redirect } from "react-router-dom"
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";

export default function AuthPage(props) {
  const { auth } = useSession()
  if (auth) {
    return <Redirect to="/dashboard" />
  }

  console.log(props)
  return (
    <>
      {props.location.pathname === "/login" ? <Login /> : <SignUp />}
    </>
  )
}