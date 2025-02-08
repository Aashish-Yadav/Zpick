import React from 'react'
import { FaSearch } from "react-icons/fa";


function Search() {
  return (
    <div className='flex justify-center'>
        <div className='relative '>
            <input 
            type="text" 
            className='bg-white outline-none pl-4 pr-3 py-2 md:w-xs w-25 rounded-l-2xl drop-shadow-lg '/>
            <label className='absolute right- bottom-0 text-blue-600 bg-white p-3 rounded-r-2xl cursor-pointer hover:bg-gray-300 drop-shadow-lg' ><FaSearch /></label>
        </div>
    </div>
  )
}

export default Search