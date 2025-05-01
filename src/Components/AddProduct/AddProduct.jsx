import React, { useState, useRef } from 'react';
import axios from 'axios';

function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({ name, price, image });

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('image', image);

    axios.post('http://localhost:4000/upload/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        // Reset form on success
        setName('');
        setPrice('');
        setImage(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      })
      .catch((err) => {
        console.log('Error in frontend', err);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full mt-1"
            onChange={(e) => setImage(e.target.files[0])}
            ref={fileInputRef}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
