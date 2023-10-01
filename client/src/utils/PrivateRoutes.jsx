import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoutes = () => {
  const loggedIn = window.localStorage.getItem('user')
  return (
        loggedIn!=='' ? <Outlet/>:<Navigate to='/auth'/>
  )
}


export default PrivateRoutes
