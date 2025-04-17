import React, { useEffect, useState } from 'react';
import { Figure_List } from '../../assets/assets.js';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { useParams } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

function ProductDetail() {
  const { ProductId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const foundProduct = Figure_List.find(item => item.id == ProductId);
    setProductData(foundProduct);
  }, [ProductId]);

  if (!productData) {
    return <div className="w-full h-screen flex items-center justify-center text-xl">Loading...</div>;
  }

  return (
    <div className='w-full min-h-screen bg-gray-100'>
      <Navbar />

      <div className='max-w-5xl mx-auto bg-white shadow-lg rounded-xl my-10 p-6 flex flex-col md:flex-row gap-6'>
        {/* Product Image */}
        <div className='md:w-1/2 w-full flex justify-center items-center'>
          <img
            className="rounded-lg max-h-80 object-contain"
            src={productData.img}
            alt={productData.name}
          />
        </div>

        {/* Product Info */}
        <div className='md:w-1/2 w-full'>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>{productData.name}</h1>
          <p className='text-sm text-gray-600 mt-2'>
            Blue Aura Anime Action Figure Pack of 2 Height -6.5 Cm for Car Dashboard Decoration, Office & Study Table. Assembly Required | PVC Plastic | N K 6.5
          </p>

          {/* Rating */}
          <div className='flex text-2xl mt-4'>
            {[...Array(5)].map((_, index) => (
              <CiStar
                key={index}
                className={index < productData.rating ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>

          {/* Price */}
          <div className='mt-6 text-2xl font-semibold text-blue-600 flex justify-between items-center '>
            <span>₹{productData.price}</span>
            <span className='text-gray-400 text-lg'>(?) Review</span>
          </div>


          {/* Add to Cart Button */}
          <div className='mt-6 text-center'>
            <button className='px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition duration-300 cursor-pointer'>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetail;
