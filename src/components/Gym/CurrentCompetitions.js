import React from "react"
import CompetitionCard from "../Competition/CompetitionCard"
import { useCompetitions } from "../../hooks/useCompetitions"
import { useSession } from "../../hooks/useAuth"

import sprint from "../../assets/images/unsplash-track.jpg"
import onepunch from "../../assets/images/onepunch.jpg"
import thor from "../../assets/images/thor.jpg"

const CurrentCompetitions = ({ gym }) => {
  const [
    isLoading,
    competitions,
    addCompetitions,
    deleteComp,
  ] = useCompetitions(gym)

  return (
    <div className={"current_competitions"}>
      {competitions ? (
        Object.values(competitions).map(competition => {
          return (
            <CompetitionCard key={competition.name} competition={competition} />
          )
        })
      ) : (
        <>
          <CompetitionCard
            name="Sprint Challenge 1"
            prize="2,000"
            image={sprint}
            participants="46"
            duration="June 1, 2019 to June 30, 2019"
          />
          <CompetitionCard
            name="One Punch Man Challenge"
            prize="1,000"
            image={onepunch}
            participants="12"
            duration="July 1, 2019 to July 31, 2019 "
          />
          <CompetitionCard
            name="Thor Challenge"
            prize="4,000"
            image={thor}
            participants="35"
            duration="August 1, 2019 to August 31, 2019"
          />
          <CompetitionCard
            name="Sprint Challenge 2"
            prize="2,000"
            image={sprint}
            participants="12"
            duration="September 1, 2019 to September 31, 2019"
          />
        </>
      )}
    </div>
  )
}

export default CurrentCompetitions
