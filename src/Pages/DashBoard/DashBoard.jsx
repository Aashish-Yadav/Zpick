import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function DashBoard() {
  return (
    <div>
        <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet /> 
      </main>
    </div>
    </div>
  )
}

export default DashBoard
