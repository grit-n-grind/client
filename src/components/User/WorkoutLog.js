import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { useSession } from "../../hooks/useAuth"

import { store } from "../../config/firebase"

import moment from "moment"
import { importNamespaceSpecifier } from "@babel/types"

const WorkoutLog = () => {
  const {
    auth: { uid },
  } = useSession()

  const [journals, setJournals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = store
      .collection("users")
      .doc(uid)
      .collection("journals")
      .limit(10)
      .onSnapshot(snapShot => {
        let items = []
        snapShot.forEach(doc => {
          items.push({ ...doc.data() })
        })
        setJournals(items)
        setLoading(false)
      })

    return () => unsubscribe()
  }, [])

  return (
    <div className="workout_log">
      <div className="exercises_to_submit">
        <Link to="/journals/new">
          <button>Add a session</button>
        </Link>
        {journals.map(journal => (
          <div className="exercise_card">
            <h1>{journal.exercises[0].name}</h1>
            <h1>{journal.exercises[0].description}</h1>
            <h1>{journal.exercises[0].difficulty}</h1>
            <h1>{journal.exercises[0].distance}</h1>
            <h1>
              {journal.exercises[0].time > 0 ? journal.exercises[0].time : null}
            </h1>
            {/* <h1>{journal.createdAt.moment().humanize()}</h1> */}
            {/* <h1>{journal.descrptio}</h1>
        <h1>{journal.name}</h1>
      <h1>{journal.name}</h1>  */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkoutLog
