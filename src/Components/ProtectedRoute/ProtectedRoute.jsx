import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    console.log("Role",role)

  return token ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoute