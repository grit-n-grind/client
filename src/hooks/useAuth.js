import { useContext, createContext, useEffect, useReducer } from "react"
import firebase, { store } from "../config/firebase"

var googleProvider = new firebase.auth.GoogleAuthProvider()

export const userContext = createContext({
  user: null,
  initializing: true,
  auth: null,
})

export const useSession = () => {
  const { state } = useContext(userContext)
  return state
}

const initialState = {
  user: null,
  initializing: true,
  auth: null,
}

export const AUTH_CHANGE = "AUTH_CHANGE"
export const SET_DATA = "SET_DATA"

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_CHANGE:
      return { ...state, initializing: false, auth: action.payload }
    case SET_DATA:
      return { ...state, user: action.payload }
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
  const checkUser = ({ additionalUserInfo, user }) => {
    console.log(additionalUserInfo, user)

    store
      .doc(`users/${user.uid}`)
      .get()
      .then(res => {
        if (!res.exists) {
        }
      })
  }

  switch (type) {
    case GOOGLE_AUTH_PROVIDER:
      return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(checkUser)
    default:
      return firebase.auth().signOut()
  }
}
