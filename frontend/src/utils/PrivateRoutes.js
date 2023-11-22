

import React,{useContext,useEffect} from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const PrivateRoutes = () => {
    //contexts
    const {user} = useContext(AuthContext)

  return (
    <>
    {
        user 
        ?
        <Outlet />
        :
        <Navigate to='/login' />
    }
    </>
  )
}

export default PrivateRoutes
