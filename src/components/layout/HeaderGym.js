import React from "react"
import headerGym from "../../assets/images/GymHeader.jpg"
import ProfileNav from "./ProfileNav"
import { authHandler, useSession } from "../../hooks/useAuth"
import DashboardContent from "./DashboardContent"
import { useGymData } from "../../hooks/useGymsData"

const HeaderGym = ({ page, setPage, navItems, data }) => {
  return (
    <div
      className={"dashboard_header"}
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(34, 34, 31, 1)) 50% / cover, url('${headerGym}')`,
        // backgroundPositionY: "center",
        backgroundSize: "cover",
      }}>
      {/* <img className={ "dashboard_header-img" } src={ headerGym }/> */}
      <div>
        <h1 className={"dashboard_header-user-name"}>{data.name}</h1>
        <button onClick={authHandler} className={"dashboard_logout-btn"}>
          Logout
        </button>
        <h3 className={"dashboard_header-city"}>
          {data.city}, {data.state}
        </h3>
      </div>
      {/* <div className={"margin-bottom"} /> */}
      <ProfileNav page={page} setPage={setPage} navItems={navItems} />
    </div>
  )
}

export default HeaderGym
