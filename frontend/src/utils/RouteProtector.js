
import { Outlet,Navigate } from 'react-router-dom'
import { useContext } from 'react'

import React from 'react'

import { AuthContext } from '../contexts/AuthContext'

const RouteProtector = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
    {
        user 
        ?
        <Outlet />
        :
        <Navigate to='login' />
    }
    </>
  )
}

export default RouteProtector
