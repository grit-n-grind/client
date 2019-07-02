import React from "react"

import "../../styles/index1.scss"
import WhiteLogo from "../../assets/WhiteLogo"
import Button from "./Button"

const style = {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "10px",
}

const marginRight = {
  cursor: "pointer",
  marginRight: "20px",
  color: "white",
}

const buttonStyle = {
  cursor: "pointer",
  fontFamily: "$poppins",
  padding: ".3rem 3rem",
  marginBottom: "5px",
  fontWeight: "400",
  border: "none",
  fontSize: "1.5rem",
  borderRadius: "50px",
  background: "linear-gradient(180deg, #F75C03 0%, #FF8000 93.51%)",
  color: "white",
  marginRight: "20px",
}

const outerContainer = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "transparent",
}

const Navbar = () => {
  return (
    <div style={outerContainer}>
      <WhiteLogo />
      <div style={style}>
        <p style={marginRight}>LOGIN</p>
        <Button style={buttonStyle} text="JOIN" />
      </div>
    </div>
  )
}

export default Navbar
