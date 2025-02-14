import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import video from '../../assets/video.mp4'
import kimono from '../../assets/kimono.jpg'
import katana from '../../assets/katana.jpg'
import charm from '../../assets/charm.jpg'
import decoratives from '../../assets/decoratives.jpg'
import back2 from '../../assets/back2.jpg'

function About() {
  return (
    <div>
        <Navbar/>  
       <div className='p-4'>
       <div>
          <h1 className='text-3xl font-bold '>Introduction</h1>
          <p className='text-xl'>Welcome to Zpick, your ultimate destination for high-quality anime merchandise! We are passionate otakus dedicated to bringing you the best anime-inspired apparel, collectibles, accessories, and more. Whether you're a die-hard fan of classic series or the latest trending anime, we've got something special for you.
           Our mission is to connect anime lovers with premium merch that lets them express their fandom in style. We work with top manufacturers to ensure authenticity, quality, and exclusive designs that you won’t find anywhere else.
           At Zpick, we believe anime is more than just entertainment—it's a way of life. That’s why we’re committed to providing a seamless shopping experience, fast shipping, and excellent customer service.
           Join us on this anime adventure and find your next favorite piece of merch today!</p>
        </div>      
        <div className='flex items-center'>
          <div className='w-1/2'>
          <h2 className='text-3xl font-bold mb-5'>Our Mission</h2>
          <p className='text-xl'>At Zpick, our mission is to bring anime fans closer to the worlds they love by offering high-quality, 
            authentic, and exclusive merchandise. We aim to create a shopping experience that is seamless, exciting, 
            and full of passion—just like anime itself. Whether you're a casual viewer or a hardcore collector, we’re here 
            to help you express your fandom in the best way possible.</p>
          </div>
          <div className='w-1/2 '>
            <video autoPlay muted loop  className='w-full h-150'>
              <source src={video} type="video/mp4"/>
            </video>
        </div>
        </div>
        <div className='w-full text-center text-4xl font-bold bg-gray-200 py-4'>WHAT WE SELL........</div>
        
        <div className='flex items-center my-5'>
        <div className='w-2/5'>
            <img src={kimono} alt="kimono"/>
          </div>
          <div className='w-3/5'>
            <p>🔥 Anime Apparel – From stylish T-shirts to traditional kimonos, we bring your favorite characters to life with unique and high-quality designs.</p>
          </div>
        </div>
        <div className='flex items-center my-5'>
          <div className='w-3/5'>
            <p>🗡️ Replica Katanas – Own a piece of your favorite anime with beautifully crafted katana replicas, inspired by legendary swords from top series.</p>
          </div>
          <div className='w-2/5'>
            <img src={katana} alt="katana"/>
          </div>
        </div>
        <div className='flex items-center my-5'>
        <div className='w-3/5 relative mb-40 md:ml-30'>
            <img src={charm} alt="charm" className='size-80'/>
            <img src={decoratives} alt="decoratives" className='size-80 absolute top-37 left-20'/>
          </div>
          <div className='w-3/5'>
            <p>🎎 Collectible Figures & Toys – Bring home detailed anime figures, plushies, and action figures of your beloved characters..</p>
            <br/>
            <p>🎁 Accessories & More – From keychains to posters, we have the perfect anime-inspired accessories to complete your collection.</p>
          </div>
        </div>
       </div>
        <Footer/>
    </div>
  )
}

export default About