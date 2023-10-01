import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'


const AuthRoutes=()=>{
    const loggedIn = window.localStorage.getItem('user')
    return (
        
        loggedIn!=='' ? JSON.parse(loggedIn)==='admin@admin.com'?<Navigate to='/dashboard'/> : <Navigate to='/'/> :<Outlet/>
        
        )
    
  }

export default AuthRoutes
