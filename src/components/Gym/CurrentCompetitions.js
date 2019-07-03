import React from "react"
import PropTypes from "prop-types"
import CompetitionCard from '../Competition/CompetitionCard'

const CurrentCompetitions = props => {
  return ( <div className={"current_competitions"} style={{display: "flex", flexWrap:"wrap", padding: "10px"}}>
    <CompetitionCard />
    <CompetitionCard />
    <CompetitionCard />
    <CompetitionCard />
    </div> )
}

export default CurrentCompetitions