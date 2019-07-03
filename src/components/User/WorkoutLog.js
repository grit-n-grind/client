import React, { useState, useEffect } from "react"

import { useSession } from "../../hooks/useAuth"

import { store } from "../../config/firebase"

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
      .onSnapshot(snap => {
        let items = []
        console.log(snap)
        snap.forEach(doc => {
          items.push({ journal: doc.data() })
          setJournals(items)
          setLoading(false)
        })
      })

    console.log(journals)
    return () => unsubscribe()
  }, [])

  return (
    <div>
      {journals.map(j => (
        <h1>Journal</h1>
      ))}
    </div>
  )
}

export default WorkoutLog
