import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Star } from 'lucide-react';

function SearchPage() {
  const location = useLocation();
  // Get search results from location state or use default empty array
  const searchResult = location.state?.result || [];
  console.log(searchResult)
  const [searchQuery, setSearchQuery] = useState('');
  
  // For demo purposes, let's handle an empty state properly
  const results = Array.isArray(searchResult) ? searchResult : 
    (searchResult ? [searchResult] : []);

  return (
    <div className="min-h-screen bg-gray-50">      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Results Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Search Results</h1>
          <p className="text-gray-600">Found {results.length} items</p>
        </div>
        
        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow hover:bg-gray-100">
                    <Heart size={18} className="text-gray-500" />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} className="text-gray-300" />
                    </div>
                    <span className="ml-1 text-xs text-gray-500 right-0">
  ({item.reviews && item.reviews.length > 0 ? item.reviews.length : 0}){" "}
  {item.reviews && item.reviews.length === 1 ? "review" : "reviews"}
</span>
                  </div>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-purple-600">₹{item.price}</span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h2 className="text-xl font-medium text-gray-700">No products found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search terms or browse our categories</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default SearchPage;