import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'


const AdminRoutes=()=>{
    const loggedIn = window.localStorage.getItem('user')
    return (
        
        loggedIn!=='' && JSON.parse(loggedIn).email ==='admin@admin.com' ?   <Outlet/> :<Navigate to='/'/>
        
        )
    
  }

export default AdminRoutes
