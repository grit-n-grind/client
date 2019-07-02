import React from "react"
import { Line } from "react-chartjs-2"

const UserGoals = () => {
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
