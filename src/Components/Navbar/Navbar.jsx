import React, { useState } from 'react';
import '../../Index.css';
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogout } from "react-icons/md";
import axios from 'axios';

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        const response = await axios.get(`http://localhost:4000/product/search?q=${encodeURIComponent(searchQuery)}`);
        const searchResult = response.data;
  
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`, {
          state: { result: searchResult },
        });
  
        setSearchQuery(''); // Clear the search box
      } catch (error) {
        console.error('Search error:', error);
      }
    }
  };
  
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row - Logo and Menu Button */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-white text-2xl font-bold tracking-wider">Zpick</span>
            </Link>
          </div>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-grow max-w-md mx-6">
            <form onSubmit={handleSearch} className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <FaSearch className="text-blue-500 h-4 w-4" />
              </button>
            </form>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link to="/about" className="text-white hover:text-blue-100 px-2 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-100 px-2 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Contact
              </Link>
              <Link to="/profile" className="text-white hover:text-blue-100 transition duration-150 ease-in-out">
                <FaUserCircle className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="text-white hover:text-blue-100 transition duration-150 ease-in-out">
                <div className="relative">
                  <FaShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">3</span>
                </div>
              </Link>
              <button 
                onClick={handleLogout} 
                className="text-white hover:text-blue-100 transition duration-150 ease-in-out cursor-pointer"
                aria-label="Logout"
              >
                <MdOutlineLogout className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
              aria-expanded="false"
            >
              <GiHamburgerMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Search Bar - Mobile (Always visible) */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch} className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <FaSearch className="text-blue-500 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/contact" className="text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link to="/profile" className="text-white hover:bg-blue-500 flex items-center px-3 py-2 rounded-md text-base font-medium">
              <FaUserCircle className="h-5 w-5 mr-2" />
              Profile
            </Link>
            <Link to="/cart" className="text-white hover:bg-blue-500 flex items-center px-3 py-2 rounded-md text-base font-medium">
              <div className="relative mr-2">
                <FaShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs font-bold">3</span>
              </div>
              Cart
            </Link>
            <button 
              onClick={handleLogout}
              className="text-white hover:bg-blue-500 w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium"
            >
              <MdOutlineLogout className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;