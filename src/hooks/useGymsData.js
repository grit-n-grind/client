import React, { useState, useEffect } from "react"
import { useCollection } from "./useColletion"
import { store } from "../config/firebase"

export const useGymData = () => {
  const ref = store.collection( "gyms" )
  const [ isLoading, data, addDoc, deleteDoc ] = useCollection( ref )
  
  const addGym = gym => {
    addDoc( { name: gym } )
  }
  
  const deleteGym = id => {
    deleteDoc( id )
  }
  
  const getGym = id => {
    if( id ){
      if( data[ id ] ){
        return data[ id ]
      }
    }
    return null
  }
  
  return [ data, addGym, getGym, deleteGym ]
}
