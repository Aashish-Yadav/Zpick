import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios'
import { User, Mail, IdCard, Phone, Calendar } from 'lucide-react'

function UserProfile() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const token = JSON.parse(localStorage.getItem('token'))

    const fetchData = () => {
        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.post('http://localhost:4000/user/profile', {}, header)
            .then((res) => {
                setLoading(false);
                setData(res?.data);
                console.log("user data Fetched", res)
            })
            .catch((err) => {
                setLoading(false);
                setError("Failed to load profile data");
                console.log("something went wrong", err)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="flex justify-center items-center min-h-screen bg-gray-50">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="mt-4 text-lg font-medium text-gray-700">Loading profile...</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <Navbar />
                <div className="flex justify-center items-center min-h-screen bg-gray-50">
                    <div className="text-center text-red-500">
                        <p className="text-xl font-bold">{error}</p>
                        <button 
                            onClick={fetchData}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    const userData = data?.data || {};
    const defaultAvatar = "https://via.placeholder.com/150";

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            
            <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    {/* Profile Header with Background */}
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 md:h-48"></div>
                    
                    {/* Profile Content */}
                    <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
                        {/* Avatar */}
                        <div className="relative -mt-16 flex justify-center">
                            <img 
                                src={userData.photo || defaultAvatar} 
                                alt="Profile" 
                                className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                        </div>
                        
                        {/* User Info */}
                        <div className="mt-6 text-center">
                            <h1 className="text-3xl font-bold text-gray-900">{userData.name || "User Name"}</h1>
                            <p className="text-sm text-gray-500 mt-1">Member since {userData.joinedDate || "2023"}</p>
                        </div>
                        
                        {/* Profile Details */}
                        <div className="mt-8 border-t border-gray-200 pt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                                    <div className="p-3 rounded-full bg-blue-100">
                                        <IdCard className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">User ID</p>
                                        <p className="text-lg font-semibold text-gray-900">{userData.id || "ID12345"}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                                    <div className="p-3 rounded-full bg-purple-100">
                                        <Mail className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <p className="text-lg font-semibold text-gray-900">{userData.email || "user@example.com"}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                                    <div className="p-3 rounded-full bg-green-100">
                                        <Phone className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">Phone</p>
                                        <p className="text-lg font-semibold text-gray-900">{userData.phone || "Not provided"}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                                    <div className="p-3 rounded-full bg-yellow-100">
                                        <Calendar className="h-6 w-6 text-yellow-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">Account Type</p>
                                        <p className="text-lg font-semibold text-gray-900">{userData.accountType || "Standard"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="mt-8 flex justify-center space-x-4">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-sm">
                                Edit Profile
                            </button>
                            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 shadow-sm">
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default UserProfile