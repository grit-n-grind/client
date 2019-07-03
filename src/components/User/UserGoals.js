import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"

import { useSession } from "../../hooks/useAuth"

import { store } from "../../config/firebase"

const UserGoals = () => {

  const {
    auth: { uid },
  } = useSession()

  const [state, setState] = useState({
    isLoading: true,
    labelDates: [],
    bodyFatData: [],
    currentWeightData: [],
  })

  useEffect(() => {
    const unsubscribe = store
    .collection("users")
    .doc(uid)
    .collection("journals")
    .onSnapshot(snapShot => {
      const dates = []
      const bodyFat = []
      const weight = []

      snapShot.forEach(doc => {
        const data = doc.data()

          dates.push(data.date)
          bodyFat.push(data.bodyFat)
          weight.push(data.weight)

        })
            setState({
              ...state,
              labelDates: dates,
              bodyFatData: bodyFat,
              currentWeightData: weight,
              isLoading: false,
            })
      })


    return () => unsubscribe()
  }, [])

  const data = {
    labels: state.labelDates,
    datasets: [
      {
        label: "Body Weight",
        data: state.currentWeightData,
        backgroundColor: "rgba(255, 10, 10, 0.05)",
        borderColor: "rgba(255, 10, 10, 1)",
      },
      {
        label: "Body Fat Percentage",
        data: state.bodyFatData,
        backgroundColor: "rgba(247, 92, 3, 0.05)",
        borderColor: "#f75c03",
      },
    ],
  }

  const options = {
    title: {
      display: true,
      text: "Progress Chart",
    },
  }

  console.log(state)
  if (state.isLoading) return <h1>Loading...</h1>

  return <Line data={data} options={options} />
}

export default UserGoals
