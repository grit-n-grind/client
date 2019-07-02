import React, { useState } from "react"
import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Avatar from "../components/layout/Avatar"
import DashboardContent from "../components/layout/DashboardContent"
import { useSession } from "../hooks/useAuth"

const UserDashboard = () => {
  const [ page, setPage ] = useState( "Goals" )
  const { user, auth: { photoURL } } = useSession()
  
  return ( <div className={ "user_dashboard" }>
    <Sidebar>
      <Avatar className={ "avatar" } image={ photoURL }/>
    </Sidebar>
    <section className={ "user_dashboard-content" }>
      <Header { ...user } page={ page } setPage={ setPage }/>
      <DashboardContent page={ page }/>
    </section>
  </div> )
}

export default UserDashboard
