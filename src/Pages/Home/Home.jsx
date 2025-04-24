import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Carousal from '../../Components/Slider/Carousal'
import ListPage from '../../Components/ListPage/ListPage'
import Footer from '../../Components/Footer/Footer'
// import Search from '../../Components/search/search'


function Home() {
  return (
    <div>
        {/* <Search/> */}
        <Carousal/>
        <ListPage/>
    </div>
  )
}

export default Home