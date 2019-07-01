import React from "react";
import Navbar from "../components/layout/Navbar";
import '../styles/index1.scss';
import Button from '../components/layout/Button'


const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      Landing
      <div>
        <div className="left-landing" />
        <button>Hello Landing</button>
        <Button />
        <div className="landing-content" />
        <div className="right-landing" />
      </div>
    </div>
  );
};

export default Landing;
