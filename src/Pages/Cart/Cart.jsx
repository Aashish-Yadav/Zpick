import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import goku from '../../assets/goku.jpg'

function Cart() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='bg-gray-200 w-full h-screen flex justify-center'>
          <div className='flex bg-white md:w-3xl h-fit py-10 justify-around w-sm px-3 md:rounded-lg mt-10 relative'>
            <div>
              <img src={goku} className='md:w-60 h-auto size-30'/>
            </div>
            <div className='absolute right-4 top-1 text-gray-500 cursor-pointer'>&#x2718;</div>

            <div className='h-full'>
              <div className='mb-17'>
              <p>Goku Figure</p>
              <p>Description- it is a that that that</p>
              </div>
              <div className='flex justify-between'>
                <div>Price</div>
                <div>
                  <span className='bg-gray-300 px-4 rounded-l-xl py-1 mr-1 text-md shadow-r-xl cursor-pointer'>-</span> 
                  <span className='bg-gray-300 px-3 rounded-r-xl py-1 shadow-l-xl text-md cursor-pointer'>+</span>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div><Footer/></div>
    </div>
  )
}

export default Cart