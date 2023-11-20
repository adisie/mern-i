
import { useContext } from 'react'
import {Outlet,Navigate} from 'react-router-dom'


import React from 'react'

import { AuthContext } from '../contexts/AuthContext'

const PrivateRoutes = () => {
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

export default PrivateRoutes
