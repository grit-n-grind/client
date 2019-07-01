import React from "react";
import Navbar from "../components/layout/Navbar";
import "../styles/index1.scss";
import Button from "../components/layout/Button";

const style = {
  fontFamily: "$poppins",
  padding: ".7rem",
  fontWeight: "400",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(180deg, #F75C03 0%, #FF8000 93.51%)",
  color: "white"
};

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
  );
};

export default Landing;
