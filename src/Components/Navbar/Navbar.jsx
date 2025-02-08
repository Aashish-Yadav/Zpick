import React from 'react';
import '../../Index.css';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
  return (
    <div className='bg-blue-500 w-full size-16 px-6 sticky'>
      <div className='flex justify-between items-center pt-4 px-3'>
        <div className='text-3xl font-bold'>
          <Link to='/'><p className='text-white'>Zpick</p></Link>
          </div>
          <div className='ml-10'><Search/></div>
          <div className='visible md:collapse right-7 absolute text-white font-bold'><GiHamburgerMenu /></div>
        <div className='collapse md:visible'>
          <ul className='flex gap-6 font-semibold text-base text-white'>
            {/* <li>Home</li> */}
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <li className='py-1'><FaShoppingCart /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar