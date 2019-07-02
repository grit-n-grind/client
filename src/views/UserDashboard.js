import React, { useState } from "react"
import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Avatar from "../components/layout/Avatar"
import DashboardContent from "../components/User/DashboardContent"

const UserDashboard = () => {
  const [ page, setPage ] = useState( "goals" )
  
  return ( <div className={ "user_dashboard" }>
    <Sidebar>
      <Avatar className={ "avatar" }/>
    </Sidebar>
    <section className={ "user_dashboard-content" }>
      <Header page={ page } setPage={ setPage }/>
      <DashboardContent page={ page }/>
    </section>
  </div> )
}

export default UserDashboard
