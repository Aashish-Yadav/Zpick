import React, { useState } from 'react'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { Home, Settings, Users, Mail, FileText, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [toggle , setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const menuItems = [
        { title: 'Dashboard', icon: <Home size={20} />, path: 'admindashboard' },
        { title: 'Messages', icon: <Mail size={20} />, path: 'messages'},
        { title: 'Users', icon: <Users size={20} />, path: 'users' },
        { title: 'Add Product', icon: <FileText size={20} />, path: 'addproduct' },
        // { title: 'Settings', icon: <Settings size={20} /> },
      ];
  return (
    <div className={`${toggle ? 'w-20' : 'w-40'} bg-blue-100 h-screen`}>
      <div className= 'flex justify-between align-center p-4'>
        {!toggle && <span className='font-bold text-xl'>Menu</span>}
        <button onClick={handleToggle}>{toggle ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </button>
      </div>
      <div className=''>
        {
            menuItems.map((item,id)=>(
               <Link key={id} to={item.path}>
                 <div  className='flex items-center space-x-4 p-4 hover:bg-blue-200'>
                    <span>{item.icon}</span>
                    {!toggle && <span>{item.title}</span>}
                </div>
               </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Sidebar
