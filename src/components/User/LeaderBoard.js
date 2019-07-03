import React, { useState, useEffect } from "react"
import LeaderBoardUser from "./LeaderBoardUser"

import { store } from "../../config/firebase"

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
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = store.collection("users").onSnapshot(snap => {
      let items = []
      snap.forEach(doc => {
        const data = doc.data()
        console.log(data)
        items.push({
          name: `${data.firstName} ${data.lastName}`,
        })
      })

      setUsers(items)
      setLoading(false)
    })

    console.log(users)
    return () => unsubscribe()
  }, [])

  return (
    <div className={"leader_board"}>
      <section className={"leader_board_users"}>
        {users &&
          users.map((user, index) => {
            return (
              <LeaderBoardUser key={index} place={index + 1} name={user.name} />
            )
          })}
      </section>
    </div>
  )
}

export default LeaderBoard
