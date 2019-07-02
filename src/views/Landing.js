import React from "react"

import Navbar from "../components/layout/Navbar"
import "../styles/index1.scss"
import Logo from "../assets/images/logo-text.png"

import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <div className="left-landing">
          {/* <button className='landing-button'>Hello Landing</button> */}
          <div className="landing-content">
            <img src={Logo} alt="logo" />
            <p>
              The first application of its kind. Get motivated. Get fit. Win
              big.
            </p>
            <Link to="/login">
              <button>Start Competing</button>
            </Link>
          </div>
        </div>
        <div className="right-landing" />
      </div>
    </>
  )
}

export default Landing
