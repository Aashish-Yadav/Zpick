import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Carousal from '../../Components/Slider/Carousal'
import ListPage from '../../Components/ListPage/ListPage'
import Footer from '../../Components/Footer/Footer'
// import Search from '../../Components/search/search'


function Home() {
  return (
    <div>
        <Navbar/>
        {/* <Search/> */}
        <Carousal/>
        <ListPage/>
        <Footer/>
    </div>
  )
}

export default Home