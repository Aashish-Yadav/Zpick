import React, {useEffect, useState} from "react";
import { Figure_List } from "../../assets/assets";
import { FaShoppingCart } from "react-icons/fa";

function ListPage() {

    // const [cart, setCart] = useState('')
    // const [Count, setCount] = useState(Array(Figure_List.length).fill(0));
    

    // function handleDecrease(index){
    //     if(Count[index]>0){
    //         setCount(prevCount =>
    //           prevCount.map((Count, i) => (i === index ? Count - 1 : Count))
    //         );
    //     }
    // }
    // function handleIncrease(index){
    //     if(Count[index]>=0){
    //         setCount(prevCount =>
    //           prevCount.map((Count, i) => (i === index ? Count + 1 : Count))
    //         );
    //     }
    // }
    // useEffect(() => {
    //     console.log("Updated count", Count)
    // }, [Count])
    

  return (
    <div className="w-full mt-10 p-4">
      {/* Title */}
      <div className="mx-auto text-center">
        <h1 className="text-3xl font-bold">Anime Figures</h1>
      </div>

      {/* Swiper Slider */}
      <div className="mt-5 flex flex-wrap gap-5">
        
          {Figure_List.map((item, index) => (
              <div key={index} className="mx-auto py-3 rounded-lg px-3 bg-gray-100 shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={item.img}
                    className="md:h-70 md:w-70 h-40 w-40 object-cover"
                    alt={item.name}
                  />
                </div>

                <div className="w-full text-center font-semibold text-lg mt-3">
                  {item.name}
                </div>

                <div className="flex justify-between px-4 pb-3 mt-2 text-lg">
                  <div>&#8377;{item.price}/-</div>
                  <div>
                    <div className="flex bg-gray-200 py-1 px-3 rounded-xl">
                      {/* <p className="shadow-xl mr-2 cursor-pointer " onClick={()=>handleDecrease(index)}>-</p> */}
                      <p className="mr-2 shadow-xl cursor-pointer px-5 py-1 hover:sacle-110"><FaShoppingCart /></p>
                      {/* <p className="cursor-pointer shadow-xl" onClick={()=>handleIncrease(index)}>+</p> */}
                    </div>
                  </div>
                </div>
              </div>
          ))}
      </div>
    </div>
  );
}

export default ListPage;
