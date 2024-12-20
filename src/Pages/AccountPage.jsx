
import React, { useState } from "react";
import profile from "../assets/profile.png";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userInfo, setUserInfo] = useState({
    username: "UserName",
    email: "",
    phone: "",
    city: "",
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

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={userInfo.avatar}
                alt="Avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
              {editMode && (
                <input type="file" onChange={handleAvatarChange} />
              )}
            </div>
            <div>
              <label className="block text-gray-800">Username</label>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                disabled={!editMode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-800">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                disabled={!editMode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-800">Phone</label>
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                disabled={!editMode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-800">City</label>
              <input
                type="text"
                name="city"
                value={userInfo.city}
                disabled={!editMode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <button
              onClick={() => setEditMode(!editMode)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
            >
              {editMode ? "Save" : "Edit Profile"}
            </button>
          </div>
        );
      case "reviews":
        return (
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-800 font-semibold">Great car service!</p>
              <p className="text-gray-600">The staff was very friendly and helpful.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-800 font-semibold">Loving my new Hyundai!</p>
              <p className="text-gray-600">It drives smoothly and looks amazing.</p>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-800 font-semibold">Order #12345</p>
              <p className="text-gray-600">Purchased: Hyundai Elantra - 2023</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-800 font-semibold">Order #67890</p>
              <p className="text-gray-600">Purchased: Maintenance Service</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">My Account</h1>
      <div className="flex space-x-8">
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <ul className="space-y-4">
            <li
              className={`cursor-pointer p-2 rounded-lg text-gray-800 hover:bg-gray-100 ${
                activeTab === "profile" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveTab("profile")}
            >
              My Profile
            </li>
            <li
              className={`cursor-pointer p-2 rounded-lg text-gray-800 hover:bg-gray-100 ${
                activeTab === "reviews" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              My Reviews
            </li>
            <li
              className={`cursor-pointer p-2 rounded-lg text-gray-800 hover:bg-gray-100 ${
                activeTab === "orders" ? "bg-gray-200" : ""
              }`}
              onClick={() => setActiveTab("orders")}
            >
              My Orders
            </li>
          </ul>
        </div>
        <div className="w-3/4 bg-white p-4 rounded-lg shadow-md">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
