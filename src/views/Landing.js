import React from "react"

import Navbar from "../components/layout/Navbar"
import "../styles/index1.scss"
import Button from "../components/layout/Button"
import compHeader from "../assets/images/unsplash-track.jpg"
import Logo from "../assets/images/logo-text.png"

const Landing = props => {
  return (
    <>
      <Navbar />
      <div  className="landing-container">
        <div className="left-landing">
        {/* <button className='landing-button'>Hello Landing</button> */}
        <div className="landing-content">
            <img src={Logo} alt="logo"/>
            <p>The first application of its kind. Get motivated. Get fit. Win big.</p>
            <button>Start Competing</button>
            </div>
        </div>
        <div className="right-landing">
            </div>
      </div>
    </>
  )
}

export default Landing
