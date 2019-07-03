import React, { useState, useEffect } from "react"
import GymCard from "../Gym/GymCard"
import { useSession } from "../../hooks/useAuth"

import { store } from "../../config/firebase"

const AllGyms = ({ gym }) => {
  const [state, setstate] = useState({ isLoading: true, gyms: [] })

  useEffect(() => {
    const unsubscribe = store.collection("gyms").onSnapshot(snapshot => {
      let items = []
      snapshot.forEach(doc => {
        const data = doc.data()
        items.push({ location: `${data.city}, ${data.state}`, ...data })
      })
      setstate({ ...state, isLoading: false, gyms: items })
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className={"current_competitions"}>
      {state.gyms.map(gym => (
        <GymCard gym={gym} />
      ))}
    </div>
  )
}

export default AllGyms
