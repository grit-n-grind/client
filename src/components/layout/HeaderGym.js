import React from "react"
import headerGym from "../../assets/images/GymHeader.jpg"
import ProfileNav from "./ProfileNav"
import DashboardContent from "./DashboardContent"

const HeaderGym = ( { page, setPage, navItems } ) => {
  return ( <div className={ "dashboard_header" } style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(34, 34, 31, 1)), url('${ headerGym }')`}}>
    {/* <img className={ "dashboard_header-img" } src={ headerGym }/> */}
    <h1 className={ "dashboard_header-user-name" }>Name Placeholder</h1>
    <h3 className={ "dashboard_header-city" }>City Name</h3>
    <div className="margin-bottom"></div>
    <ProfileNav page={ page } setPage={ setPage } navItems={ navItems }/>
  </div> )
}

export default HeaderGym