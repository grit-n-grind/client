import { useContext, createContext, useEffect, useReducer } from "react"
import firebase, { store } from "../config/firebase"

const googleProvider = new firebase.auth.GoogleAuthProvider()

const facebookProvider = new firebase.auth.FacebookAuthProvider()

export const userContext = createContext({
  user: null,
  initializing: true,
  auth: null,
  onBoardUser: false,
})

export const useSession = () => {
  const { state } = useContext(userContext)
  return state
}

const initialState = {
  user: null,
  initializing: true,
  auth: null,
  onBoardUser: false,
}

export const AUTH_CHANGE = "AUTH_CHANGE"
export const SET_DATA = "SET_DATA"
export const ONBOARD_USER = "ONBOARD_USER"

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_CHANGE:
      return { ...state, auth: action.payload }
    case SET_DATA:
      return {
        ...state,
        initializing: false,
        onBoardUser: false,
        user: action.payload,
      }
    case ONBOARD_USER:
      return { ...state, initializing: false, onBoardUser: true }
    default:
      return state
  }
}

export const useAuth = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function onChange(user) {
    dispatch({ type: AUTH_CHANGE, payload: user })
  }

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
    // unsubscribe to the listener when unmounting
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (state.auth) {
      const unsubscribe = store
        .doc(`users/${state.auth.uid}`)
        .onSnapshot(snapShot => {
          if (snapShot.exists) {
            dispatch({ type: SET_DATA, payload: snapShot.data() })
          } else {
            dispatch({ type: ONBOARD_USER })
          }
        })

      return () => unsubscribe()
    }
  }, [state.auth])

  return { state, dispatch }
}

export const GOOGLE_AUTH_PROVIDER = "GOOGLE_AUTH_PROVIDER"
export const FACEBOOK_AUTH_PROVIDER = "FACEBOOK_AUTH_PROVIDER"
export const EMAIL_AUTH_PROVIDER = "EMAIL_AUTH_PROVIDER"

export const authHandler = type => {
  switch (type) {
    case GOOGLE_AUTH_PROVIDER:
      return firebase.auth().signInWithPopup(googleProvider)
    case FACEBOOK_AUTH_PROVIDER:
      return firebase.auth().signInWithPopup()
    default:
      return firebase.auth().signOut()
  }
}
