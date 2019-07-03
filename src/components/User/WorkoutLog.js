import React, { useState, useEffect } from "react"

import { useSession } from "../../hooks/useAuth"

import { store } from "../../config/firebase"

import moment from 'moment'

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
        console.log(snapShot)
        let items = []
        snapShot.forEach(doc => {
          
          items.push({ ...doc.data() }) 
        })
        setJournals(items)
        setLoading(false)
      })

    
    return () => unsubscribe()
  }, [])

  console.log(journals)

  return (
    <div>
      {journals.map(journal => (
        <>
        {console.log(journal)}
       <h1>{journal.exercises[0].name}</h1>
       <h1>{journal.exercises[0].description}</h1>
       <h1>{journal.exercises[0].difficulty}</h1>
       <h1>{journal.exercises[0].distance}</h1>
       <h1>{journal.exercises[0].time > 0 ? journal.exercises[0].time : null}</h1>
       {/* <h1>{journal.createdAt.moment().humanize()}</h1> */}
        {/* <h1>{journal.descrptio}</h1>
        <h1>{journal.name}</h1>
        <h1>{journal.name}</h1>  */}
        </>
      ))}
    </div>
  )
}

export default WorkoutLog
