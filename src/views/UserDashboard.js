import React from "react"
import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"

const UserDashboard = () => {
  return (
    <div className={"user_dashboard"}>
      <Sidebar />
      <section className={"user_dashboard-content"}>
        <Header />
      </section>
    </div>
  )
}

export default UserDashboard
