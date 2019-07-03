import React from "react"
import CompetitionCard from "../Competition/CompetitionCard"
import { useCompetitions } from "../../hooks/useCompetitions"
import { useSession } from "../../hooks/useAuth"

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
          <CompetitionCard />
          <CompetitionCard />
          <CompetitionCard />
          <CompetitionCard />
        </>
      )}
    </div>
  )
}

export default CurrentCompetitions
