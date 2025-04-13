import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full bg-blue-500'>
      <div className='flex w-full justify-center md:gap-50 gap-10 py-30'>
        <div className='text-white md:text-xl'>
          <ul className='text-center '>
            <h1 className='text-xl font-semibold text-black'>Get to know Us</h1>
            <Link to='/about'><li className='mt-5 cursor-pointer hover:scale-110 hover:underline'>About</li></Link>
            <Link to='/contact'><li className='cursor-pointer hover:scale-110 hover:underline mt-2'>Contact</li></Link>
            <li className='cursor-pointer hover:scale-110 hover:underline mt-2'>Terms & Condition</li>
            <li className='cursor-pointer hover:scale-110 hover:underline mt-2'>Privacy</li>
          </ul>
        </div>
        <div className='text-white md:text-xl'>
          <ul className='text-center'>
            <h1 className='text-xl font-semibold text-black'>Connect with Us</h1>
            <li className='mt-5 cursor-pointer hover:scale-110 hover:underline'>LinkedIn</li>
            <li className='cursor-pointer hover:scale-110 hover:underline mt-2'>Instagram</li>
            <li className='cursor-pointer hover:scale-110 hover:underline mt-2'>Youtube</li>
            <li className='cursor-pointer hover:scale-110 hover:underline mt-2'>Reddit</li>
            <li className='cursor-pointer hover:scale-110 hover:underline mt-2'>FaceBook</li>
          </ul>
        </div>
        <div className='text-white md:text-xl'>
          <ul className='text-center'>
            <h1 className='text-xl font-semibold text-black'>Make money with Us</h1>
            <li className='mt-5 cursor-pointer hover:scale-110 hover:underline'>Become Affiliate</li>
            <li className='cursor-pointer hover:scale-110 hover:underline mt-2'>Sell on Zpick</li>
            <li className='cursor-pointer hover:scale-110 hover:underline mt-2'>Supply to Zpick</li>
            <li className='cursor-pointer hover:scale-110 hover:underline mt-2'>Advertise your product</li>
          </ul>
        </div>

      </div>
      <div className='mt-10 text-white text-md text-center pb-5'>&copy;Zpick All rights reserved.</div>
    </div>
  )
}

export default Footer