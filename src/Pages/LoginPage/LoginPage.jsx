import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
//
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    const payload ={
      email:email,
      password:password
    }    
    axios.post('http://localhost:4000/user/login',payload)
    .then((res)=>{
      console.log("user logged in",res)
      setLoading(false)
      toast.success(res?.data.message);
      localStorage.setItem('token', JSON.stringify(res?.data?.token))
      setTimeout(() => navigate("/"), 2000);
    })
    .catch((err)=>{
      console.log("something went wrong while login", err)
      setLoading(false)
      toast.error(err?.response?.data?.message || "Registration failed");    
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 flex-col ">
      <h1 className="text-blue-500 my-3 text-3xl font-bold">Zpick</h1>
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 pr-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaEye/> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <button
          disabled={loading}
            type="submit"
            className="w-full bg-blue-600 disabled:opacity-70 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            {loading ? 'submitting...' : "signin"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?
          <Link to="/register">
            <span className="text-blue-600 hover:underline ml-1">Sign Up</span>
          </Link>
        </p>
      </div>
      <ToastContainer position="top-right"/>
    </div>
  );
}

export default LoginPage;
