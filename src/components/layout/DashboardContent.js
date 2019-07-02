import React from "react"
import UserGoals from "../User/UserGoals"
import UserStats from "../User/UserStats"
import UserGraph from "../User/UserGraph"
import WorkoutLog from "../User/WorkoutLog"
import LeaderBoard from "../User/LeaderBoard"
import CreateGym from "../User/CreateGym"
import CreateCompetition from "../Gym/CreateCompetition"
import CurrentCompetitions from "../Gym/CurrentCompetitions"

const DashboardContent = props => {
  return ( <div className={ "dashboard-content" }>
    { props.page === "Goals" && <UserGoals/> }
    { props.page === "Stats" && <UserStats/> }
    { props.page === "graph" && <UserGraph/> }
    { props.page === "Workout Log" && <WorkoutLog/> }
    { props.page === "Leader Board" && <LeaderBoard/> }
    { props.page === "Create Gym" && <CreateGym/> }
    { props.page === "Create Competition" && <CreateCompetition/> }
    { props.page === "Competitions" && <CurrentCompetitions/> }
  </div> )
}

export default DashboardContent