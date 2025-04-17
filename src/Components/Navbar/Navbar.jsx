import React from 'react';
import '../../Index.css';
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // checks if token exists

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='bg-blue-500 w-full h-16 px-6 sticky top-0 shadow-md z-50'>
      <div className='flex justify-between items-center h-full px-3'>
        {/* Logo */}
        <div className='text-3xl font-bold'>
          <Link to='/' className='text-white hover:text-gray-200 transition duration-300'>Zpick</Link>
        </div>

        {/* Search Component */}
        <div className='ml-10'>
          <Search />
        </div>

        {/* Hamburger Icon (for mobile view - optional) */}
        <div className='visible md:collapse right-7 absolute text-white font-bold'>
          <GiHamburgerMenu />
        </div>

        {/* Navigation Links */}
        <div className='collapse md:visible'>
          <ul className='flex gap-6 font-semibold text-base text-white items-center'>
            <Link to='/profile'>
              <li className='py-1 text-lg cursor-pointer hover:text-gray-200'><FaUserCircle /></li>
            </Link>

            <Link to='/cart'>
              <li className='py-1 text-lg cursor-pointer hover:text-gray-200'><FaShoppingCart /></li>
            </Link>

            {!isLoggedIn ? (
              <Link to='/login' className='hover:text-gray-200'>
                <li className='text-base'>Sign In</li>
              </Link>
            ) : (
              <li
                className='py-1 text-lg cursor-pointer hover:text-gray-200 flex items-center gap-1'
                onClick={handleLogout}
              >
                <MdOutlineLogout />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
