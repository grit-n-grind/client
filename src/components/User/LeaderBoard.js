import React from "react"
import LeaderBoardUser from "./LeaderBoardUser"

const users = [
  { name: "Jeff" },
  { name: "Martha" },
  { name: "Bob" },
  { name: "Jeff" },
  { name: "Martha" },
  { name: "Bob" },
  { name: "Jeff" },
  { name: "Martha" },
  { name: "Bob" },
]

const LeaderBoard = () => {
  return (
    <div className={"leader_board"}>
      <section className={"leader_board_users"}>
        {users &&
          users.map(user => {
            return <LeaderBoardUser name={user.name} />
          })}
      </section>
    </div>
  )
}

export default LeaderBoard
