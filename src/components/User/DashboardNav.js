import React from "react"

const DashboardNav = props => {
  
  return ( <div className={ "dashboard-nav" }>
    <ul className={ "nav" }>
      <li
        className={ props.page === "goals" ? "nav-item active" : "nav-item" }
        onClick={ () => props.setPage( "goals" ) }
      ><span className="nav-item-text">Goals</span>
      </li>
      <li
        className={ props.page === "stats" ? "nav-item active" : "nav-item" }
        onClick={ () => props.setPage( "stats" ) }
      ><span className="nav-item-text">Stats</span>
      </li>
      <li
        className={ props.page === "leaderboard" ? "nav-item active" :
          "nav-item" }
        onClick={ () => props.setPage( "leaderboard" ) }
      ><span className="nav-item-text">LeaderBoard</span>
      </li>
      <li className={ props.page === "workoutLog" ? "nav-item active" :
        "nav-item" }
          onClick={ () => props.setPage( "workoutLog" ) }
      ><span className="nav-item-text">Workout Log</span>
      </li>
      <li className={ props.page === "playlist" ? "nav-item active" :
        "nav-item" }><span className="nav-item-text">Playlist</span>{ " " }
        <span className="coming_soon">COMING SOON</span></li>
    </ul>
  </div> )
}
export default DashboardNav