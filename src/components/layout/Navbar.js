import React from "react";

import "../../styles/index1.scss";
import WhiteLogo from "../../assets/WhiteLogo";
import Button from "./Button";

const style = {
  backgroundColor: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "20px"
};

const marginRight = {
  marginRight: "20px",
  color: "white"
};

const buttonStyle = {
  fontFamily: "$poppins",
  padding: ".7rem",
  fontWeight: "400",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(180deg, #F75C03 0%, #FF8000 93.51%)",
  color: "white",
  marginRight: "20px"
};

const outerContainer = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "black"
};

const Navbar = () => {
  return (
    <div style={outerContainer}>
      <WhiteLogo />
      <div style={style}>
        <p style={marginRight}>LOGIN</p>
        <Button style={buttonStyle} text="JOIN" />
      </div>
    </div>
  );
};

export default Navbar;
