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
    <div className="bg-gray-50 min-h-screen">      
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section - Introduction */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 transform transition duration-300 hover:shadow-xl">
          <h1 className="text-4xl font-bold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2">Introduction</h1>
          <p className="text-xl leading-relaxed text-gray-700">
            Welcome to Zpick, your ultimate destination for high-quality anime merchandise! We are passionate otakus dedicated to bringing you the best anime-inspired apparel, collectibles, accessories, and more. Whether you're a die-hard fan of classic series or the latest trending anime, we've got something special for you.
            <br /><br />
            Our mission is to connect anime lovers with premium merch that lets them express their fandom in style. We work with top manufacturers to ensure authenticity, quality, and exclusive designs that you won't find anywhere else.
            <br /><br />
            At Zpick, we believe anime is more than just entertainment—it's a way of life. That's why we're committed to providing a seamless shopping experience, fast shipping, and excellent customer service.
            <br /><br />
            Join us on this anime adventure and find your next favorite piece of merch today!
          </p>
        </div>
        
        {/* Mission Section with Video */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-white rounded-2xl shadow-lg p-8 transform transition duration-300 hover:shadow-xl">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-2">Our Mission</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              At Zpick, our mission is to bring anime fans closer to the worlds they love by offering high-quality, 
              authentic, and exclusive merchandise. We aim to create a shopping experience that is seamless, exciting, 
              and full of passion—just like anime itself. Whether you're a casual viewer or a hardcore collector, we're here 
              to help you express your fandom in the best way possible.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <video autoPlay muted loop className="w-full h-auto">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        
        {/* What We Sell Header */}
        <div className="w-full text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 text-transparent bg-clip-text py-4">
            WHAT WE SELL
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-indigo-800 mx-auto mt-2"></div>
        </div>
        
        {/* Product Categories - Alternating Layout */}
        <div className="space-y-16">
          {/* Anime Apparel */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-8 transform transition duration-300 hover:shadow-xl hover:translate-y-1">
            <div className="w-full md:w-2/5">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src={kimono} alt="kimono" className="w-full h-auto object-cover transition duration-300 hover:scale-105" />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <div className="flex items-start space-x-4">
                <span className="text-4xl">🔥</span>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-800 mb-3">Anime Apparel</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    From stylish T-shirts to traditional kimonos, we bring your favorite characters to life with unique and high-quality designs. Each piece is carefully crafted to ensure comfort and durability while showcasing your anime passion.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Replica Katanas */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-8 transform transition duration-300 hover:shadow-xl hover:translate-y-1">
            <div className="w-full md:w-3/5">
              <div className="flex items-start space-x-4">
                <span className="text-4xl">🗡️</span>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-800 mb-3">Replica Katanas</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Own a piece of your favorite anime with beautifully crafted katana replicas, inspired by legendary swords from top series. Each replica is meticulously designed to capture the essence and details of the original weapons.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src={katana} alt="katana" className="w-full h-auto object-cover transition duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
          
          {/* Collectibles and Accessories */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-8 transform transition duration-300 hover:shadow-xl hover:translate-y-1">
            <div className="w-full md:w-2/5 relative">
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <img src={charm} alt="charm" className="w-full h-auto object-cover transition duration-300 hover:scale-105" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md ml-8 mt-4">
                <img src={decoratives} alt="decoratives" className="w-full h-auto object-cover transition duration-300 hover:scale-105" />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">🎎</span>
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-800 mb-3">Collectible Figures & Toys</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Bring home detailed anime figures, plushies, and action figures of your beloved characters. Our collection features limited editions and rare finds that will delight any collector.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">🎁</span>
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-800 mb-3">Accessories & More</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      From keychains to posters, we have the perfect anime-inspired accessories to complete your collection. Express your fandom in every aspect of your life with our carefully curated selection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to explore our collection?</h2>
          <p className="text-xl mb-6">Discover the perfect anime merchandise that speaks to your passion!</p>
          <button className="bg-white text-indigo-800 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default About




