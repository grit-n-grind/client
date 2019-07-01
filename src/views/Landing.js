import React from "react";
import Navbar from '../components/layout/Navbar'

const Landing = () => {
  return (
    <div>
      <Navbar />
      Landing
      <div>
        <div className="left-landing" />
        <div className="landing-content" />
        <div className="right-landing" />
      </div>
    </div>
  );
};

export default Landing;
