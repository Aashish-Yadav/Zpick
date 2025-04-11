import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    const payload ={
      name: userName,
      email: email,
      password: password
    }
    console.log(payload);
    axios.post('http://localhost:4000/user/register', payload)
    .then((res)=>{
      console.log("User Registered", res)
      setLoading(false)
      toast.success(res?.data?.message)
      setTimeout(() => navigate("/login"), 4000);
    })
    .catch((err) => {
      console.log("something went wrong", err);
      setLoading(false);
      toast.error(err?.response?.data?.message || "Registration failed");
    });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 flex-col">
      <h1 className="text-blue-500 my-3 text-3xl font-bold">Zpick</h1>
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              value={userName}
              onChange={(e)=> setUserName(e.target.value)}
              required
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?
          <Link to="/login"><span className="text-blue-600 hover:underline ml-1">
            Sign In
          </span></Link>
        </p>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}