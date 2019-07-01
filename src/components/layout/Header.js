import React from "react"
import headerImage from "../../assets/images/user-header-img.png"

const Header = () => {
  return (
    <div
      className={"dashboard_header"}
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(34, 34, 31, 1)), url('${headerImage}')`,
        backgroundPositionY: "center",
      }}>
      {/* <img className={ "dashboard_header-img" } src={ headerImage }/> */}
      <h1 className={"dashboard_header-user-name"}>Name Placeholder</h1>
      <h3 className={"dashboard_header-city"}>City Name</h3>
      <h3 className={"dashboard_header-city"}>
        <i className="fas fa-trophy" />0
      </h3>
    </div>
  )
}

export default Header
