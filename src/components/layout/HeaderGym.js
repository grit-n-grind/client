import React from "react"
import headerGym from "../../assets/images/GymHeader.jpg"
import ProfileNav from "./ProfileNav"
import { authHandler, useSession } from "../../hooks/useAuth"
import DashboardContent from "./DashboardContent"
import { useGymData } from "../../hooks/useGymsData"

const HeaderGym = ( { page, setPage, navItems, gymId } ) => {
  
  const [ data, addGym, getGym, deleteGym ] = useGymData()
  const gym = getGym( gymId )
  
  return ( <div className={ "dashboard_header" }>
    <img className={ "dashboard_header-img" } src={ headerGym }/>
    <h1 className={ "dashboard_header-user-name" }>{ gym && gym.name &&
    gym.name }</h1>
    <h3 className={ "dashboard_header-city" }>{ gym && gym.city &&
    gym.city }</h3>
    <ProfileNav page={ page } setPage={ setPage } navItems={ navItems }/>
  </div> )
}

export default HeaderGym