import React, { useState } from "react";
import profile from "../assets/profile.png";

const AccountPage = () => {
  const [userInfo, setUserInfo] = useState({
    username: "UserName",
    email: "user@example.com",
    phone: "123-456-7890",
    city: "City",
    avatar: profile,
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserInfo((prev) => ({ ...prev, avatar: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    alert("Changes saved successfully!");
    setEditMode(false); // After saving, exit edit mode
  };

  return (
    <div className="flex justify-center py-12 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mt-16">
        {/* Header Section */}
        <div className="bg-blue-600 py-8 px-6 text-white flex flex-col items-center">
          <img
            src={userInfo.avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-white object-cover mb-4"
          />
          {editMode && (
            <input
              type="file"
              onChange={handleAvatarChange}
              className="text-sm text-gray-200 mt-2"
            />
          )}
          <h1 className="text-2xl font-bold">{userInfo.username}</h1>
          <p className="text-sm">{userInfo.email}</p>
        </div>

        {/* Main Section */}
        <div className="px-6 py-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${
                  editMode ? "bg-gray-50" : "bg-gray-100"
                } text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${
                  editMode ? "bg-gray-50" : "bg-gray-100"
                } text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${
                  editMode ? "bg-gray-50" : "bg-gray-100"
                } text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            {/* City Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={userInfo.city}
                disabled={!editMode}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${
                  editMode ? "bg-gray-50" : "bg-gray-100"
                } text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={() => {
                if (editMode) handleSaveChanges();
                setEditMode(!editMode);
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {editMode ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
