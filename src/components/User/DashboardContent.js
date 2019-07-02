import React from "react"
import UserGoals from "./UserGoals"
import UserStats from "./UserStats"
import UserGraph from "./UserGraph"
import WorkoutLog from "./WorkoutLog"

const DashboardContent = props => {
  return ( <div className={ "dashboard-content" }>
    { props.page === "goals" && <UserGoals/> }
    { props.page === "stats" && <UserStats/> }
    { props.page === "graphs" && <UserGraph/> }
    { props.page === "workoutLog" && <WorkoutLog/> }
  </div> )
}

export default DashboardContent