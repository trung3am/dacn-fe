import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'
 
const GoogleAuthContext = React.createContext() // Not necessary, but recommended.
 
export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: "787519195270-60t4fc0amp6rm21sq4mf5bgtt3sarhhp.apps.googleusercontent.com", // Your clientID from Google.
  })
 
  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {/* The rest of your app */}
      {children}
    </GoogleAuthContext.Provider>
  )
}
 
export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
 