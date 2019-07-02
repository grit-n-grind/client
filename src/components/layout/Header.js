import React from "react"
import headerImage from "../../assets/images/user-header-img.png"

import { authHandler, useSession } from "../../hooks/useAuth"
import { FaTrophy } from "react-icons/fa"
import DashboardNav from "../User/DashboardNav"

const Header = props => {
  const {
    user: { firstName, lastName, city, state },
  } = useSession()
  return ( <div className={ "dashboard_header" }>
    <img className={ "dashboard_header-img" } src={ headerImage }/>
    <h1
      className={ "dashboard_header-user-name" }>{ `${ firstName } ${ lastName }` }</h1>
    <button onClick={ authHandler }
            className={ "dashboard_logout-btn" }>Logout
    </button>
    <h3 className={ "dashboard_header-city" }>{ `${ city }, ${ state }` }</h3>
    <FaTrophy/>
    { props.page &&
    <DashboardNav page={ props.page } setPage={ props.setPage }/> }
  </div> )
}

export default Header
