import React, { useState, useEffect } from "react"
import Sidebar from "../components/layout/Sidebar"
import HeaderGym from "../components/layout/HeaderGym"
import Avatar from "../components/layout/Avatar"
import DashboardContent from "../components/layout/DashboardContent"

import { store } from "../config/firebase"
import { useSession } from "../hooks/useAuth"

const OwnerDashboard = ({ match: { params } }) => {
  const [state, setstate] = useState({ isLoading: true, error: false })
  const [page, setPage] = useState("Competitions")
  const navItems = [
    { name: "Competitions", enabled: true },
    {
      name: "Create" + " Competition",
      enabled: true,
    },
  ]
  useEffect(() => {
    const unsubscribe = store
      .collection("gyms")
      .doc(params.slug)
      .onSnapshot(snapShot => {
        if (snapShot.exists) {
          const data = snapShot.data()
          setstate({ ...state, isLoading: false, error: false, ...data })
        } else {
          setstate({ isLoading: false, error: 404, message: "Not Found" })
        }
      })
    return () => unsubscribe()
  }, [])

  return (
    <div className={"owner_dashboard"}>
      <Sidebar className="sidebar">
        <div>
          <Avatar className={"avatar"} image={state.logo} />
          <p style={{ textAlign: "center", lineHeight: "2.4rem" }} />
          <p style={{ textAlign: "center", lineHeight: "2.4rem" }}>
            {state.city}, {state.state}
          </p>
        </div>
        <div className="gym-content">
          <div className="flex">
            <p>Members: </p>
            <p style={{ color: "#fca311" }}>2321</p>
          </div>
          <div className="flex">
            <p>Competing: </p>
            <p style={{ color: "#fca311" }}>321</p>
          </div>
          <br />
          <div className="flex">
            <p>Competitions: </p>
            <p style={{ color: "#fca311" }}>3</p>
          </div>
          <div className="flex">
            <p>Active: </p>
            <p style={{ color: "#fca311" }}>2</p>
          </div>
          <div className="flex">
            <p>Completed: </p>
            <p style={{ color: "#fca311" }}>1</p>
          </div>
        </div>
      </Sidebar>
      <section className={"owner_dashboard-content"}>
        <HeaderGym
          page={page}
          setPage={setPage}
          navItems={navItems}
          data={state}
          // gymId={user.gym}
        />
        <DashboardContent page={page} />
      </section>
    </div>
  )
}

export default OwnerDashboard
