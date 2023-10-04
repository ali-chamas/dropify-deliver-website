

import {createContext,useContext,useState} from 'react'

 const AuthContext = createContext()

 export const AuthContectProvider = ({children})=>{
    const [orderContext,setOrderContext]=useState()
    
   

    return (
        <AuthContext.Provider value={{orderContext,setOrderContext}}>
            {children}
        </AuthContext.Provider>
    )
 }

 export const useAuthContext = ()=>useContext(AuthContext);