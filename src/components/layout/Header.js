import React from "react"
import headerImage from "../../assets/images/user-header-img.png"

import { authHandler, useSession } from "../../hooks/useAuth"
import { FaTrophy } from "react-icons/fa"
import ProfileNav from "../layout/ProfileNav"

const Header = ( { firstName, lastName, city, state, page, setPage } ) => {
  
  const navItems = [
    { name: "Goals", enabled: true }, { name: "Stats", enabled: true },
    { name: "Leader Board", enabled: true },
    { name: "Workout Log", enabled: true },
    { name: "Create Gym", enabled: true }, { name: "Playlist", enabled: false },
  ]
  
  return ( <div
    className={ "dashboard_header" }
    style={ {
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(34, 34, 31, 1)), url('${ headerImage }')`,
      backgroundPositionY: "center",
    } }>
    <div className="block">
      <h1
        className={ "dashboard_header-user-name" }>{ `${ firstName } ${ lastName }` }</h1>
      <button onClick={ authHandler } className={ "dashboard_logout-btn" }>
        Logout
      </button>
      <h3
        className={ "dashboard_header-city" }>{ `${ city }, ${ state }` }</h3>
      <FaTrophy/>
    </div>
    { page &&
    <ProfileNav page={ page } setPage={ setPage } navItems={ navItems }/> }
  </div> )
}

export default Header
