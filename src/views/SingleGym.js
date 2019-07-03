import React, { useEffect, useState } from "react"
import { store } from "../config/firebase"

import { Redirect } from "react-router-dom"

import { useSession } from "../hooks/useAuth"

export default function SingleGym({ match: { params } }) {
  const [state, setstate] = useState({ isLoading: true, error: false })
  console.log(params)
  useEffect(() => {
    const unsubscribe = store
      .collection("gyms")
      .doc(params.slug)
      .onSnapshot(snapShot => {
        if (snapShot.exists) {
          const data = snapShot.data()
          setstate({ ...state, isLoading: false, error: false, ...data })
        } else {
          setstate({ isLoading: false, error: 404, message: "Not Found" })
        }
      })
    return () => unsubscribe()
  }, [])

  console.log(state)
  return <div />
}
