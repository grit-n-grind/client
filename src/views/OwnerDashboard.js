import React, { useState } from "react"
import Sidebar from "../components/layout/Sidebar"
import HeaderGym from "../components/layout/HeaderGym"
import Avatar from "../components/layout/Avatar"
import DashboardContent from "../components/layout/DashboardContent"

const OwnerDashboard = () => {
  
  const [ page, setPage ] = useState( "Competitions" )
  
  const navItems = [
    { name: "Competitions", enabled: true }, {
      name: "Create" + " Competition", enabled: true,
    },
  ]
  
  return ( <div className={ "owner_dashboard" }>
    <Sidebar className='sidebar'>
      <div>
        <Avatar className={ "avatar square" }/>
        <p style={ { textAlign: "center", lineHeight: "2.4rem" } }>
          44861 Spruceton Dr
        </p>
        <p style={ { textAlign: "center", lineHeight: "2.4rem" } }>
          Rochester Hills, MI
        </p>
      </div>
      <div className="gym-content">
        <div className="flex">
          <p>Members: </p><p style={ { color: "#fca311" } }>2321</p>
        </div>
        <div className="flex">
          <p>Competing: </p><p style={ { color: "#fca311" } }>321</p>
        </div>
        <br/>
        <div className="flex">
          <p>Competitions: </p><p style={ { color: "#fca311" } }>3</p>
        </div>
        <div className="flex">
          <p>Active: </p><p style={ { color: "#fca311" } }>2</p>
        </div>
        <div className="flex">
          <p>Completed: </p><p style={ { color: "#fca311" } }>1</p>
        </div>
      </div>
    </Sidebar>
    <section className={ "owner_dashboard-content" }>
      <HeaderGym page={ page } setPage={ setPage } navItems={ navItems }/>
      <DashboardContent page={ page }/>
    </section>
  </div> )
}

export default OwnerDashboard
