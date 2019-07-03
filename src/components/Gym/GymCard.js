import React from "react"
import { FaRegUserCircle } from "react-icons/fa"

import { Link } from "react-router-dom"

const GymCard = ({ gym }) => {
  return (
    <div className="competition_card">
      <div className="competition_card_header">
        <div className="competition_card_title">
          <h2>{gym ? gym.location : "Gym Location"}</h2>
          <p>{gym ? gym.name : "Gym Name"}</p>
        </div>
        <div className="competition_card_title_bottom">
          <div>
            <span>
              <FaRegUserCircle size="20px" />
            </span>
            <span>7 Participants</span>
          </div>
          <Link to={`/gym/${gym.slug}`}>
            <button>OPEN</button>
          </Link>
        </div>
      </div>
      {/* <div className="competition_card_body">
        <p>June 1, 2019 to June 30, 2019</p>
        <p>{gym ? gym.description : "Description"}</p>
      </div> */}
    </div>
  )
}

export default GymCard
