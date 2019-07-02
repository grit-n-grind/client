import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"

import { useSession } from "../../hooks/useAuth"

import { store } from "../../config/firebase"

const UserGoals = () => {
  const {
    auth: { uid },
  } = useSession()
  const [state, setstate] = useState({ isLoading: true, data: [] })

  useEffect(() => {
    const unsubscribe = store
      .collection("users")
      .doc(uid)
      .collection("journals")
      .onSnapshot(snapShot => {
        let items = []
        snapShot.forEach(doc => {
          const data = doc.data()
          items.push({ id: doc.id, ...data })
        })
        setstate({ ...state, isLoading: false, data: items })
      })

    return () => unsubscribe()
  }, [])

  console.log(state)

  const data = {
    labels: [
      "JUN 1st",
      "JUN 2nd",
      "JUN 4th",
      "JUN 5th",
      "JUN 6th",
      "JUN 8th",
      "JUN 9th",
      "JUN 15th",
      "JUN 21st",
    ],
    datasets: [
      {
        label: "Body Fat Percentage",
        data: [30, 24, 22, 20, 20, 19, 15, 20, 23],
        backgroundColor: "rgba(247, 92, 3, 0.3)",
        borderColor: "#f75c03",
      },
      {
        label: "Body Weight",
        data: [250, 249, 244, 246, 242, 235, 220, 210, 200],
        backgroundColor: "rgba(255, 10, 10, 0.3)",
        borderColor: "rgba(255, 10, 10, 1)",
      },
    ],
  }

  const options = {
    title: {
      display: true,
      text: "Goal Weight",
    },
  }

  return <Line data={data} options={options} />
}

export default UserGoals
