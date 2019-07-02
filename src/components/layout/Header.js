import React from "react"
import headerImage from "../../assets/images/user-header-img.png"

import { authHandler, useSession } from "../../hooks/useAuth"
import { FaTrophy } from "react-icons/fa"
import DashboardNav from "../User/DashboardNav"

const Header = () => {
  const {
    user: { firstName, lastName, city, state },
  } = useSession()
  return (
    <div
      className={"dashboard_header"}
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(34, 34, 31, 1)), url('${headerImage}')`,
        backgroundPositionY: "center",
      }}>
      {/* <img className={"dashboard_header-img"} src={headerImage} /> */}
      <h1
        className={
          "dashboard_header-user-name"
        }>{`${firstName} ${lastName}`}</h1>
      <button onClick={authHandler} className={"dashboard_logout-btn"}>
        Logout
      </button>
      <h3 className={"dashboard_header-city"}>{`${city}, ${state}`}</h3>
      <FaTrophy />
      <DashboardNav />
    </div>
  )
}

export default Header
