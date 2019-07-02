import React from "react"
import LeaderBoardAvatar from "./LeaderBoardAvatar"
import { FaTrophy } from "react-icons/fa"

const LeaderBoardUser = props => {
  return ( <div className={ "leader_board_user" }>
    <LeaderBoardAvatar/>
    <div className={ "leader_board_details" }>
      { props.name && <p className={ "user-name" }>{ props.name }</p> }
      <div className={ "trophies" }>
        <FaTrophy className={ "trophy" }/><p>5</p><FaTrophy
        className={ "trophy" }/><p>7</p>
      </div>
    </div>
  
  </div> )
}

export default LeaderBoardUser