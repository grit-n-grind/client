import React from "react"
import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Avatar from "../components/layout/Avatar"

import { useSession } from "../hooks/useAuth"

const UserDashboard = () => {
  const {
    user: { firstName, lastName, city, state },
    auth: { photoURL },
  } = useSession()
  return (
    <div className={"user_dashboard"}>
      <Sidebar>
        <Avatar className={"avatar"} image={photoURL} />
      </Sidebar>
      <section className={"user_dashboard-content"}>
        <Header
          firstName={firstName}
          lastName={lastName}
          city={city}
          state={state}
        />
      </section>
    </div>
  )
}

export default UserDashboard
