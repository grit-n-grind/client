import React from "react"
import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Avatar from "../components/layout/Avatar"

const UserDashboard = () => {
  return (
    <div className={"user_dashboard"}>
      <Sidebar>
          <Avatar className={"avatar"} />
      </Sidebar>
      <section className={"user_dashboard-content"}>
        <Header />
      </section>
    </div>
  )
}

export default UserDashboard;
