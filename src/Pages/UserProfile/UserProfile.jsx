import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios'
import { User, Mail, IdCard, Phone, Calendar, UploadCloud } from 'lucide-react'

function UserProfile() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadLoading, setUploadLoading] = useState(false);

    // Get token from localStorage 
    const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;

    // Debug function to display the structure of data
    const debugData = () => {
        console.log('Full profile data:', data);
        if (data?.data) {
            console.log('User object:', data.data);
            console.log('MongoDB ID:', data.data._id);
            console.log('User ID:', data.data.id);
        }
    };

    const fetchData = () => {
        if (!token) {
            setError("Authentication token not found");
            setLoading(false);
            return;
        }

        axios.post('http://localhost:4000/user/profile', {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("aaaaa",res)
            setLoading(false);
            setData(res?.data);
            debugData(); // Log data structure for debugging
        })
        .catch((err) => {
            console.error("Profile fetch error:", err.response?.data || err.message);
            setLoading(false);
            setError("Failed to load profile data");
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const getUserId = () => {
        // Try all possible ID fields in your data structure
        if (data?.data?._id) return data.data._id;
        if (data?.data?.id) return data.data.id;
        if (data?.data?.userId) return data.data.userId;
        if (data?.userId) return data.userId;
        if (data?._id) return data._id;
        return null;
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type and size
        const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!validTypes.includes(file.type)) {
            alert("Please select a valid image file (JPEG, PNG, GIF)");
            return;
        }

        if (file.size > maxSize) {
            alert("Image is too large. Maximum size is 5MB");
            return;
        }

        setSelectedImage(file);
        const userId = getUserId();
        
        if (!userId) {
            alert("Could not determine user ID. Please try refreshing the page.");
            console.error("User ID not found in data:", data);
            return;
        }

        // Create FormData and append necessary fields
        const formData = new FormData();
        formData.append('file', file);
        formData.append('userId', userId);

        // Log FormData entries for debugging
        console.log('File being uploaded:', file.name);
        console.log('User ID being sent:', userId);
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        setUploadLoading(true);

        axios.post('http://localhost:4000/upload/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log("Upload successful:", res.data);
            alert("Image uploaded successfully!");
            setUploadLoading(false);
            fetchData(); // Refresh user data
        })
        .catch(err => {
            setUploadLoading(false);
            console.error("Upload failed:", err.response?.data || err.message);
            alert("Image upload failed: " + (err.response?.data?.error || err.message));
        });
    };

    if (loading) {
        return (
            <div>
                <div className="flex justify-center items-center min-h-screen bg-gray-50">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="mt-4 text-lg font-medium text-gray-700">Loading profile...</p>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div>
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
            </div>
        )
    }

    const userData = data?.data || {};
    // const defaultAvatar = "https://via.placeholder.com/150";
    
    // Determine the profile image URL
    const profileImage = userData.profileImage || userData.photo ;
    
    return (
        <div className="bg-gray-50 min-h-screen">
            
            <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 md:h-48"></div>
                    
                    <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
                        <div className="relative -mt-16 flex justify-center">
                            <img 
                                src={profileImage} 
                                alt="Profile" 
                                className="h-32 w-32 rounded-full border-4 border-white shadow-lg object-cover"
                            />
                        </div>

                        {/* Upload new image */}
                        <div className="mt-4 text-center">
                            <label className="cursor-pointer text-sm text-blue-600 flex items-center justify-center space-x-2">
                                <UploadCloud className="w-5 h-5" />
                                <span>{uploadLoading ? "Uploading..." : "Change Profile Picture"}</span>
                                <input 
                                    type="file" 
                                    accept="image/jpeg, image/png, image/gif, image/jpg" 
                                    className="hidden"
                                    onChange={handleImageChange}
                                    disabled={uploadLoading}
                                />
                            </label>
                            {uploadLoading && (
                                <div className="mt-2">
                                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                                </div>
                            )}
                        </div>
                        
                        <div className="mt-6 text-center">
                            <h1 className="text-3xl font-bold text-gray-900">{userData.name || "User Name"}</h1>
                            <p className="text-sm text-gray-500 mt-1">Member since {userData.joinedDate || "2023"}</p>
                        </div>

                        {/* Debug section - remove in production */}
                        <div className="mt-4 bg-yellow-50 p-2 rounded text-xs text-center text-yellow-700">
                            <p>User ID: {getUserId() || "Unknown"}</p>
                        </div>

                        {/* User Details */}
                        <div className="mt-8 border-t border-gray-200 pt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* ID */}
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                                    <div className="p-3 rounded-full bg-blue-100">
                                        <IdCard className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">User ID</p>
                                        <p className="text-lg font-semibold text-gray-900">{getUserId() || userData.id || userData._id || "ID12345"}</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                                    <div className="p-3 rounded-full bg-purple-100">
                                        <Mail className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <p className="text-lg font-semibold text-gray-900">{userData.email || "user@example.com"}</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
                                    <div className="p-3 rounded-full bg-green-100">
                                        <Phone className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-500">Phone</p>
                                        <p className="text-lg font-semibold text-gray-900">{userData.phone || "Not provided"}</p>
                                    </div>
                                </div>

                                {/* Account Type */}
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

                        {/* Action Button (Edit Only) */}
                        <div className="mt-8 flex justify-center">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-sm">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
    )
}

export default UserProfile