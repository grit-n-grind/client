import React from "react"
import { FaRunning } from "react-icons/fa"

const exercises = [
  {
    name: "HIIT Cardio",
    time: "6 hours ago",
    value: "2.2 mi",
  },
  {
    name: "Treadmill",
    time: "1 day ago",
    value: "1.1 mi",
  },
  {
    name: "Yoga",
    time: "3 days ago",
    value: "2 hrs",
  },
]

const RecentActivity = () => {
  return (
    <div className="recent_activities">
      <p>Recent activity</p>
      <div className="activity">
        {exercises &&
          exercises.map(ex => {
            return (
              <div className="activity_card">
                <div className="activity_type">
                  <FaRunning />
                  <div className="activity_info">
                    <p>{ex.name}</p>
                    <p>{ex.time}</p>
                  </div>
                </div>
                <div className="activity_value">{ex.value}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default RecentActivity
