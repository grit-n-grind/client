import React from "react"
import Navbar from "../components/layout/Navbar"
import "../styles/index1.scss"
import Button from "../components/layout/Button"
import compHeader from "../assets/images/unsplash-track.jpg"

const Landing = props => {
  return (
    <div className="landing-container">
      <Navbar />
      Landing
      <div>
        <div className="left-landing">
          <button className="landing-button">Hello Landing</button>
          <div className="landing-content" />
        </div>
        <div className="right-landing" />
      </div>
    </div>
  )
}

export default Landing
