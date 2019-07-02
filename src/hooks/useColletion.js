import { useEffect, useState } from "react"

export const useCollection = ref => {
  // create a place to put the data
  
  const [ docState, setDocState ] = useState( {
    isLoading: true, data: null,
  } )
  
  // call on component did mount.
  useEffect( () => {
    // call snapshot on the ref and store the unsubscribe function.
    if( !ref ){
      return
    }
    debugger
    const unsubscribe = ref.onSnapshot( docs => {
      const docsObject = {}
      debugger
      docs.forEach( doc => {
        const data = doc.data()
        data.id = doc.id
        docsObject[ doc.id ] = data
      } )
      setDocState( {
        isLoading: false, data: docsObject,
      } )
    } )
    // call unsubscribe on component did unmount.
    return () => unsubscribe()
  }, [ ref ] )
  
  function addDoc( doc ){
    ref.add( doc )
  }
  
  function deleteDoc( docId ){
    ref.doc( docId ).delete()
  }
  
  return [ docState.isLoading, docState.data, addDoc, deleteDoc ]
}
