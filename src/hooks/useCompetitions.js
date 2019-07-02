import React from "react"
import { store } from "../config/firebase"
import { useCollection } from "./useColletion"

export const useCompetitions = ( gym ) => {
  
  let ref = null
  
  if( gym ){
    ref = store
      .collection( "gyms" )
      .doc( gym )
      .collection( "Competitions" )
  }
  
  const [ isLoading, competitions, addCompetitions, deleteComp ] = useCollection(
    ref )
  return [ isLoading, competitions, addCompetitions, deleteComp ]
}
