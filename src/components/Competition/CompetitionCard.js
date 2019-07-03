import React from "react"
import { FaRegUserCircle } from "react-icons/fa"

const CompetitionCard = ({
  name,
  prize,
  image,
  participants,
  duration,
  description,
}) => {
  return (
    <div className="competition_card">
      <div
        className="competition_card_header"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
          url("${image}"), rgba(0, 0, 0, 0.1)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="competition_card_title">
          <h2>{name}</h2>
          <p>${prize}</p>
        </div>
        <div className="competition_card_title_bottom">
          <div>
            <span>
              <FaRegUserCircle size="20px" />
            </span>
            <span>{participants} Participants</span>
          </div>
          <button>OPEN</button>
        </div>
      </div>
      <div className="competition_card_body">
        <p>{duration}</p>
        <p>{description ? description : "Description"}</p>
      </div>
    </div>
  )
}

export default CompetitionCard
