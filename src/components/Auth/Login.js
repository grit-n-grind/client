import React from "react"
import { useForm } from "../../hooks/useForm"
import {
  authHandler,
  GOOGLE_AUTH_PROVIDER,
  EMAIL_AUTH_PROVIDER_LOGIN,
} from "../../hooks/useAuth"

export default function Login() {
  const [values, handleChange, handleSumit] = useForm(
    {
      email: "",
      password: "",
    },
    handleLogin,
  )

  function handleLogin() {
    console.log(values)
    authHandler(EMAIL_AUTH_PROVIDER_LOGIN, values)
  }

  return (
    <div className="login-container">
      <button
        className="button-facebook"
        onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}>
        Login with Facebook
      </button>

      <button
        className="button-google"
        onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}>
        Login with Google
      </button>

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
        <button>Login with Email</button>
      </form>

      <div className="login-container_suggestion">
        <p>Don't have an account?</p>
        <button>CREATE ACCOUNT</button>
      </div>
    </div>
  )
}
