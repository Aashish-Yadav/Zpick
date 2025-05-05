import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import axios from 'axios';

function ProductDetail() {
  const { ProductId } = useParams();
  const [productData, setProductData] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchProductData();
  }, [ProductId]);

  const fetchProductData = () => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/upload/product/details/${ProductId}`)
      .then((res) => {
        const allProducts = res.data.data;
        const foundProduct = allProducts.find(item => item._id === ProductId);
        
        // If product has reviews field, use it; otherwise, initialize as empty array
        if (foundProduct && !foundProduct.reviews) {
          foundProduct.reviews = [];
        }
        
        setProductData(foundProduct);
        setLoading(false);
        setErrorMessage('');
      })
      .catch((err) => {
        console.log("Error fetching product details:", err);
        setLoading(false);
        setErrorMessage('Failed to load product data. Please try again later.');
      });
  };

  const handleReviewSubmit = () => {
    // Reset any previous error
    setErrorMessage('');
    
    // Validation
    if (!userReview.trim()) {
      setErrorMessage('Please write your review.');
      return;
    }
    
    if (userRating === 0) {
      setErrorMessage('Please select a rating.');
      return;
    }
    
    if (!userName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    
    const reviewData = {
      productId: ProductId,
      review: userReview,
      rating: userRating,
      userName: userName.trim()
    };
  
    setIsSubmitting(true);
  
    axios.post(`http://localhost:4000/upload/product/details/${ProductId}/review`, reviewData)
      .then(response => {
        if (response.data.status === 200) {
          // Success! Update UI
          // If the API returns the updated product with reviews, you can use that directly
          if (response.data.data && response.data.data.product) {
            setProductData(response.data.data.product);
          } else {
            // Otherwise, update the average rating and refresh data
            setProductData(prevData => ({
              ...prevData,
              avgRating: response.data.data?.avgRating || prevData.avgRating
            }));
            
            // Refresh to get the updated reviews
            fetchProductData();
          }
          
          // Reset form
          setUserRating(0);
          setUserReview('');
          setUserName('');
          
          // Show success message
          alert("Thank you for your review!");
        }
      })
      .catch(error => {
        console.error("Error submitting review:", error);
        setErrorMessage(error.response?.data?.message || "Failed to submit review. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Component to display all reviews
  const ReviewsList = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
      return (
        <div className="text-center py-8 text-gray-500">
          No reviews yet. Be the first to review this product!
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                {review.userName?.charAt(0).toUpperCase() || 'A'}
              </div>
              <div>
                <h4 className="font-medium">{review.userName || 'Anonymous'}</h4>
                <div className="flex text-yellow-400 text-sm">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      {star <= review.rating ? <FaStar /> : <FaRegStar />}
                    </span>
                  ))}
                </div>
              </div>
              <div className="ml-auto text-sm text-gray-500">
                {review.createdAt ? new Date(review.createdAt).toLocaleDateString() : 'Recent'}
              </div>
            </div>
            <p className="text-gray-600 mt-2">{review.review}</p>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-xl font-medium text-gray-700">Loading product details...</p>
      </div>
    );
  }

  if (errorMessage && !productData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">Error</h2>
          <p className="text-gray-600 mb-6">{errorMessage}</p>
          <Link 
            to="/products" 
            className="px-6 py-2 bg-blue-500 text-white rounded-lg inline-flex items-center hover:bg-blue-600 transition"
          >
            <IoMdArrowBack className="mr-2" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-500">Product Not Found</h2>
          <p className="mt-2 text-gray-600 mb-6">We couldn't find the product you're looking for.</p>
          <Link 
            to="/products" 
            className="px-6 py-2 bg-blue-500 text-white rounded-lg inline-flex items-center hover:bg-blue-600 transition"
          >
            <IoMdArrowBack className="mr-2" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get rating from avgRating if available, otherwise fall back to rating field
  const displayRating = productData.avgRating !== undefined ? 
    productData.avgRating : (productData.rating || 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Space - Navbar would be here */}
      <div className="h-16"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link> / 
          <Link to="/products" className="hover:text-blue-600 transition mx-1">Products</Link> / 
          <span className="text-gray-700">{productData.name}</span>
        </div>

        {/* Main Product Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
              <div className="relative group">
                <img
                  className="rounded-lg max-h-96 object-contain transition-transform duration-300 group-hover:scale-105"
                  src={productData.image}
                  alt={productData.name}
                />
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                Premium Figure
              </span>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{productData.name}</h1>
              
              <p className="text-gray-600 mb-4">
                Blue Aura Anime Action Figure Pack of 2 Height -6.5 Cm for Car Dashboard Decoration, 
                Office & Study Table. Assembly Required | PVC Plastic | N K 6.5
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      {star <= displayRating ? (
                        <FaStar className="w-5 h-5" />
                      ) : (
                        <FaRegStar className="w-5 h-5" />
                      )}
                    </span>
                  ))}
                </div>
                <span className="text-gray-500">
                  {displayRating.toFixed(1)} out of 5
                  {productData.reviews && (
                    <span className="ml-1">({productData.reviews.length} {productData.reviews.length === 1 ? 'review' : 'reviews'})</span>
                  )}
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-blue-600">₹{productData.price}</span>
                  <span className="ml-2 text-lg text-gray-500 line-through">₹{Math.round(productData.price * 1.2)}</span>
                  <span className="ml-2 text-sm text-green-600 font-medium">20% off</span>
                </div>
                <p className="text-green-600 text-sm mt-1">In Stock</p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center">
                  <MdShoppingCart className="mr-2 text-xl" />
                  Add to Cart
                </button>
                <button className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center">
                  <BiPurchaseTag className="mr-2 text-xl" />
                  Buy Now
                </button>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h3 className="font-medium text-gray-700 mb-2">Highlights:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Premium quality PVC material</li>
                  <li>Suitable for car dashboard & office decoration</li>
                  <li>Height: 6.5 cm</li>
                  <li>Pack of 2 figures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Review and Rating Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
          
          {/* Review Form */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Write a Review</h3>
            
            {errorMessage && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                <p>{errorMessage}</p>
              </div>
            )}
            
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Your Rating</label>
              <div className="flex text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setUserRating(star)}
                    className="cursor-pointer"
                  >
                    {star <= (hoveredRating || userRating) ? (
                      <FaStar className="w-8 h-8 text-yellow-400 transition-all duration-150" />
                    ) : (
                      <FaRegStar className="w-8 h-8 text-gray-300 hover:text-yellow-200 transition-all duration-150" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">Your Review</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-none"
                rows="4"
                value={userReview}
                onChange={(e) => setUserReview(e.target.value)}
                placeholder="Share your experience with this product..."
              ></textarea>
            </div>

            <button
              onClick={handleReviewSubmit}
              disabled={isSubmitting}
              className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Submit Review'
              )}
            </button>
          </div>
          
          {/* Reviews List */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Customer Reviews ({productData.reviews ? productData.reviews.length : 0})
            </h3>
            <ReviewsList reviews={productData.reviews} />
          </div>
        </div>
      </div>
      
      {/* Footer Space */}
      <div className="h-16"></div>
    </div>
  );
}

export default ProductDetail;