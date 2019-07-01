import React from "react"

import { authHandler, GOOGLE_AUTH_PROVIDER } from "../../hooks/useAuth"

export default function Login() {
  return (
    <div className="login-container">
      <button onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}>
        Login with Facebook
      </button>
      <button onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}>
        Login with Google
      </button>

      <form className="login-container_form">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login with Email</button>
      </form>

      <div className="login-container_suggestion">
        <p>Don't have an account?</p>
        <button>CREATE ACCOUNT</button>
      </div>
    </div>
  )
}
