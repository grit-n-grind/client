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
    { props.page === "Goals" && <UserGoals { ...props }/> }
    { props.page === "Stats" && <UserStats { ...props }/> }
    { props.page === "graph" && <UserGraph { ...props }/> }
    { props.page === "Workout Log" && <WorkoutLog { ...props }/> }
    { props.page === "Leader Board" && <LeaderBoard { ...props }/> }
    { props.page === "Create Gym" && <CreateGym { ...props }/> }
    { props.page === "Create Competition" && <CreateCompetition { ...props }/> }
    { props.page === "Competitions" && <CurrentCompetitions { ...props }/> }
  </div> )
}

export default DashboardContent