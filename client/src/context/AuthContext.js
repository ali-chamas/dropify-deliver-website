

import {createContext,useContext,useState} from 'react'

 const AuthContext = createContext()

 export const AuthContectProvider = ({children})=>{
    const [user,setUser]=useState()
    const [loggedIn,setLoggedIn]=useState(false)
    
    const login = (data)=>{
       setUser(data)
       setLoggedIn(true)
    }
    const signOut=()=>{
        setUser(null)
        setLoggedIn(false)
    }
   
    
   

    return (
        <AuthContext.Provider value={{user,loggedIn,signOut,login,setUser,setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
 }

 export const useAuthContext = ()=>useContext(AuthContext);