import React from "react"

const DashboardNav = props => {
  debugger
  return ( <div className={ "dashboard-nav" }>
    <ul className={ "nav" }>
      <li
        className={ props.page === "goals" ? "nav-item active" : "nav-item" }
        onClick={ () => props.setPage( "goals" ) }
      >Goals
      </li>
      <li
        className={ props.page === "stats" ? "nav-item active" : "nav-item" }
        onClick={ () => props.setPage( "stats" ) }
      >Stats
      </li>
      <li
        className={ props.page === "leaderboard" ? "nav-item active" :
          "nav-item" }
        onClick={ () => props.setPage( "leaderboard" ) }
      >LeaderBoard
      </li>
      <li className={ props.page === "workoutLog" ? "nav-item active" :
        "nav-item" }
          onClick={ () => props.setPage( "workoutLog" ) }
      >Workout Log
      </li>
      <li className={ props.page === "playlist" ? "nav-item active" :
        "nav-item" }>Playlist<span>Comming Soon</span></li>
    </ul>
  </div> )
}

export default DashboardNav