import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaSearch, FaFilter, FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function ListPage() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:4000/upload/product')
      .then((res) => {
        console.log(res?.data?.data);
        setProductData(res?.data?.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Filter products based on search term
  const filteredProducts = productData.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Title Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Anime Figures Collection</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filter and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            All Figures <span className="text-gray-500 text-lg">({filteredProducts.length} items)</span>
          </h2>
          
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              <FaFilter className="mr-2 text-gray-600" />
              <span>Filter</span>
            </button>
            <button className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
              <FaSort className="mr-2 text-gray-600" />
              <span>Sort By</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-500">{error}</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            {searchTerm ? "No products match your search. Try something else!" : "No products available."}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Separated ProductCard component for better organization
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/ProductDetails/${product._id}`}>
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            alt={product.name}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
        </div>
        
        <div className="p-5">
          <h3 className="font-semibold text-xl text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
          
          <div className="flex justify-between items-center mt-4">
            <div className="text-xl font-bold text-blue-600">₹{product.price}/-</div>
            
            <button 
              className="flex items-center gap-2 bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-700 py-2 px-4 rounded-lg transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart functionality here
                console.log("Added to cart:", product.name);
              }}
            >
              <FaShoppingCart />
              <span className="hidden sm:inline">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListPage;