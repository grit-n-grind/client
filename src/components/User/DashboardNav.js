import React from "react"

const DashboardNav = () => {
  return (
    <div className={"dashboard-nav"}>
      <ul className={"nav"}>
        <li className={"nav-item active"}>Goals</li>
        <li className={"nav-item"}>Stats</li>
        <li className={"nav-item"}>LeaderBoard</li>
        <li className={"nav-item"}>Workout Log</li>
        <li className={"nav-item"}>
          Playlist<span>Comming Soon</span>
        </li>
      </ul>
    </div>
  )
}

export default DashboardNav
