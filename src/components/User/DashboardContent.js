import React from "react"
import UserGoals from "./UserGoals"
import UserStats from "./UserStats"
import UserGraph from "./UserGraph"
import WorkoutLog from "./WorkoutLog"
import LeaderBoard from "./LeaderBoard"
import CreateGym from "./CreateGym"

const DashboardContent = props => {
  return ( <div className={ "dashboard-content" }>
    { props.page === "Goals" && <UserGoals/> }
    { props.page === "Stats" && <UserStats/> }
    { props.page === "graph" && <UserGraph/> }
    { props.page === "Workout Log" && <WorkoutLog/> }
    { props.page === "Leader Board" && <LeaderBoard/> }
    { props.page === "Create Gym" && <CreateGym/> }
  </div> )
}

export default DashboardContent