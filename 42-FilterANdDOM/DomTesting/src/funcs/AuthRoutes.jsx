import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const AuthRoutes = ({islogged}) => {
  if(!islogged){
    return <Navigate to="/login"/>
  }

  return <Outlet />
}

export default AuthRoutes
