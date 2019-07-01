import React, { useContext, useState } from "react";
import firebase from "../config/firebase";

export const userContext = React.createContext( {
    user: null, initializing: false,
} );

export const useSession = () => {
    const { user } = useContext( userContext );
    return user;
};

export const useAuth = ( history ) => {
    const [ state, setState ] = useState( () => {
        const user = firebase.auth().currentUser;
        
        return { user, initializing: !user };
    } );
    
    function onChange( user ){
        setState( { initializing: false, user } );
        
        if( !user && history.location.pathname !== "/signup" &&
            history.location.pathname !== "/" ){
            history.push( "/login" );
        }
    }
    
    React.useEffect( () => {
        // listen for auth state changes
        const unsubscribe = firebase.auth().onAuthStateChanged( onChange );
        // unsubscribe to the listener when unmounting
        return () => unsubscribe();
    }, [] );
    
    return state;
};
