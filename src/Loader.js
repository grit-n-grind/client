import React from "react"
import loader from "./assets/loader.svg"

const Loader = () => {
  return (
    <div className="loader">
      {/* <h3>Loading...</h3> */}
      <img src={loader} alt="loader" className="loader_img" />
    </div>
  )
}

export default Loader
