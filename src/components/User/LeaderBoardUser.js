import React from "react"
import LeaderBoardAvatar from "./LeaderBoardAvatar"
import { FaTrophy } from "react-icons/fa"

const LeaderBoardUser = props => {
  return (
    <div className={"leader_board_user"}>
      <div className={"leader_board_details"}>
        <LeaderBoardAvatar name={props.name} />
        {props.name && <p className={"user-name"}>{props.name}</p>}
      </div>
      <div>
        <span className="leader_board_place">
          {props.place}
          <FaTrophy className={"trophy"} />
        </span>
      </div>
    </div>
  )
}

export default LeaderBoardUser
