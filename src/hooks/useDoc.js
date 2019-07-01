import { useState, useEffect } from "react";

export const useDoc = ( ref, ) => {
    // create stat hook to store the firebase data
    
    const [ docState, setDocState ] = useState( {
        isLoading: true, data: null, exists: false,
    } );
    
    useEffect( () => {
        // subscribe to document and store function to unsubscribe to doc.
        
        if( ref ){
            const unsubscribe = ref.onSnapshot( doc => {
                // set data to the document
                let data = null;
                
                if( doc.exists ){
                    data = doc.data();
                    data.id = doc.id;
                    setDocState( { ...docState, isLoading: false, data } );
                }else{
                    setDocState( {
                        ...docState,
                        isLoading: false,
                        exists: false
                    } );
                }
            } );
            
            // on component did unmount unsubscribe from doc.
            return () => unsubscribe();
        }
    }, [ ref ] );
    
    function setDoc( doc: any ): void{
        ref.set( doc );
    }
    
    function deleteDoc(){
        /// <reference path="" />
        ref.delete();
    }
    
    //return the doc data.
    return [
        docState.isLoading, docState.data, docState.exists, setDoc, deleteDoc,
    ];
};
