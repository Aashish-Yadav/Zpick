import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Figure_List } from '../../assets/assets.js';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function Cart() {
  // const { productId } = useParams();
  const [cartData, setCartData] = useState([]);
  
  // useEffect(() => {
  //   const selectedProduct = Figure_List.find((item) => item.id === productId);
    
  //   if (selectedProduct) {
  //     setCartData((prevCart) => {
  //       const isProductInCart = prevCart.some((item) => item.id === selectedProduct.id);
  //       return isProductInCart ? prevCart : [...prevCart, { ...selectedProduct, quantity: 1 }];
  //     });
  //   }
  // }, [productId]);

  // const handleIncrease = (id) => {
  //   setCartData((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  // const handleDecrease = (id) => {
  //   setCartData((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
  //     )
  //   );
  // };

  // const handleRemove = (id) => {
  //   setCartData((prevCart) => prevCart.filter((item) => item.id !== id));
  // };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">Your Cart</h1>
      <div className="bg-gray-200 w-full min-h-screen flex flex-col items-center">
        {cartData.length === 0 ? (
          <p className="text-xl">Your cart is empty</p>
        ) : (
          cartData.map((item) => (
            <div key={item.id} className="flex bg-white w-2/3 p-5 my-3 shadow-lg rounded-lg">
              <img src={item.img} alt={item.name} className="w-40 h-40 object-cover" />
              <div className="ml-5">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>Price: ₹{item.price * item.quantity}</p>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 px-4 py-1 rounded-l-xl cursor-pointer" onClick={() => handleDecrease(item.id)}>
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button className="bg-gray-300 px-4 py-1 rounded-r-xl cursor-pointer" onClick={() => handleIncrease(item.id)}>
                    +
                  </button>
                </div>
                <button
                  className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
