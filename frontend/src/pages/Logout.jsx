import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Logout = () => {

    const {LogoutUser}  = useAuth();


    useEffect(()=>{
     LogoutUser()
    },[LogoutUser])

 
  return (
    <>
    <h1>hello logout</h1>
     <Navigate to="/login"/>
    </>
  )
}

export default Logout