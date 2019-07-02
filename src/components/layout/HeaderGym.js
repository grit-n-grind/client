import React from "react"
import headerGym from "../../assets/images/GymHeader.jpg"
import ProfileNav from "./ProfileNav"
import { authHandler, useSession } from "../../hooks/useAuth"
import DashboardContent from "./DashboardContent"
import { useGymData } from "../../hooks/useGymsData"

const HeaderGym = ( { page, setPage, navItems } ) => {
  return ( <div className={ "dashboard_header" } style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(34, 34, 31, 1)), url('${ headerGym }')`,
  backgroundPositionY: 'center',
  backgroundSize: 'cover'}}>
    {/* <img className={ "dashboard_header-img" } src={ headerGym }/> */}
    <h1 className={ "dashboard_header-user-name" }>Name Placeholder</h1>
    <button onClick={authHandler} className={"dashboard_logout-btn"}>
          Logout
        </button>
    <h3 className={ "dashboard_header-city" }>City Name</h3>
    <div className={"margin-bottom"}></div>
    <ProfileNav page={ page } setPage={ setPage } navItems={ navItems }/>
  </div> )
}

export default HeaderGym