import React from "react"

const DashboardNav = () => {
  return (
    <div className={"dashboard-nav"}>
      <ul className={"nav"}>
        <li className={"nav-item active"}>
          <span className="nav-item-text">Goals</span>
        </li>
        <li className={"nav-item"}>
          <span className="nav-item-text">Stats</span>
        </li>
        <li className={"nav-item"}>
          <span className="nav-item-text">LeaderBoard</span>
        </li>
        <li className={"nav-item"}>
          <span className="nav-item-text">Workout Log</span>
        </li>
        <li className={"nav-item"}>
          <span className="nav-item-text">Playlist</span>{" "}
          <span className="coming_soon">COMING SOON</span>
        </li>
      </ul>
    </div>
  )
}

export default DashboardNav
