import React from "react"
import { FaRegEnvelope, FaGoogle, FaFacebookF } from "react-icons/fa"
import { Redirect, Link } from "react-router-dom"

import {
  authHandler,
  GOOGLE_AUTH_PROVIDER,
  EMAIL_AUTH_PROVIDER_LOGIN,
  EMAIL_AUTH_PROVIDER_SIGNUP,
} from "../hooks/useAuth"

// Hooks
import { useSession } from "../hooks/useAuth"
import { useForm } from "../hooks/useForm"

export default function AuthPage(props) {
  const { path } = props.match

  const [values, handleChange, handleSumit] = useForm(
    {
      email: "",
      password: "",
    },
    handleLogin,
  )

  function handleLogin() {
    authHandler(
      path === "/login"
        ? EMAIL_AUTH_PROVIDER_LOGIN
        : EMAIL_AUTH_PROVIDER_SIGNUP,
      values,
    )
  }

  const { auth } = useSession()
  if (auth) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="auth-container">
      <div className="auth-container_wrapper">
        <div className="login-container">
          <button
            className="button-facebook"
            onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}>
            <i class="icon facebook">
              <FaFacebookF />
            </i>
            {path === "/login" ? "Login" : "Register"} with Facebook
          </button>

          <button
            className="button-google"
            onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}>
            <i class="icon google">
              <FaGoogle />
            </i>
            {path === "/login" ? "Login" : "Register"} with Google
          </button>

          <p className="auth-form-break">or</p>

          <form className="login-container_form" onSubmit={handleSumit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Password"
            />
            <button>
              <i class="icon email">
                <FaRegEnvelope />
              </i>
              {path === "/login" ? "Login" : "Register"} with Email
            </button>
          </form>

          <p className="login-container_privacy">
            By signing up, I agree to GritNGrind Terms of Service and Privacy
            Policy.
          </p>

          <div className="login-container_suggestion">
            <p>Don't already have an account?</p>

            {path === "/login" ? (
              <Link to="/register">
                <button>CREATE ACCOUNT</button>
              </Link>
            ) : (
              <Link to="/login">
                <button>LOGIN</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
