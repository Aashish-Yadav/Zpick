import React, { useEffect, useState } from 'react'
import {Figure_List} from '../../assets/assets.js'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import { useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";


function ProductDetail() {
    const {ProductId} = useParams()
    console.log(ProductId);
    const [productData, setProductData] = useState(null);
    useEffect(()=>{
        setProductData(Figure_List.find(item => item.id == ProductId));
        console.log(productData)
    },[ProductId])

    if (!productData) {
        return <div className="w-full h-screen flex items-center justify-center text-xl">Loading...</div>;
    }

  return (
    <div className='w-full h-screen bg-gray-300'>
        <Navbar/>
        <div className='flex justify-between bg-white w-220 h-80 mx-auto py-10 px-15 rounded-xl my-20'>
            <div className='size-60 w-1/2'>
                <img className="rounded-lg" src={productData.img} alt={productData.name}/>
            </div>
            <div className='w-1/2 ml-4'>
                <p className='text-xl font-bold'>{productData.name}</p>
                <p className='text-blue-400'>Blue Aura Anime Action Figure Pack of 2 Height -6.5 Cm for Car Dashboard Decoration Office & Study Table Assembly Required | PVC Plastic | N K 6.5</p>
                <div className='flex text-3xl mt-2'>
                    {
                        [...Array(5)].map((_ , index)=>(
                            <CiStar key={index} className={index < productData.rating ? "text-yellow-500" : "text-gray-400"} />
                        ))
                    }
                </div>
                <div className='mt-10 text-2xl font-semibold'>
                    <p>&#8377;{productData.price}</p>
                </div>
                <div className='relative left-80'><button>Add to Cart</button></div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default ProductDetail