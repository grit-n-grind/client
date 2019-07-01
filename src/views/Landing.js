import React from "react"
import Navbar from "../components/layout/Navbar"
import "../styles/index1.scss"
import Button from "../components/layout/Button"
import compHeader from "../assets/images/unsplash-track.jpg"

const Landing = props => {
  return (
    <div>
      <Navbar />
      <div  className="landing-container">
        <div className="left-landing">
        {/* <button className='landing-button'>Hello Landing</button> */}
        <div className="landing-content">
            <h1>Grit N Grind Logo</h1>
            <p>Get yo fat ass to the gym before somebody get hurt</p>
            <div className="center">
            <button>Start Competing</button>
            </div>
            </div>
        </div>
        <div className="right-landing">
            </div>
      </div>
    </div>
  )
}

export default Landing
