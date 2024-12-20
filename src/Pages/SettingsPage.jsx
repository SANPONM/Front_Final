import React, { useState } from "react";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    privacy: "Public",
  });

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="bg-white flex justify-center py-8">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden mt-16">
        {/* Header */}
        <div className="bg-blue-600 py-6 px-8 text-gray-800">
          <h1 className="text-4xl font-bold">Settings</h1>
          <p className="mt-2 text-gray-200">Manage your preferences and privacy settings</p>
        </div>

        {/* Main Content */}
        <div className="p-8 space-y-6">
          {/* Notifications */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
              <p className="text-gray-400 text-sm">Enable or disable notifications</p>
            </div>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleToggleChange}
              className="w-6 h-6 text-blue-600 focus:ring-blue-500 rounded"
            />
          </div>

          {/* Dark Mode */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Dark Mode</h2>
              <p className="text-gray-400 text-sm">Switch between light and dark themes</p>
            </div>
            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleToggleChange}
              className="w-6 h-6 text-blue-600 focus:ring-blue-500 rounded"
            />
          </div>

          {/* Privacy */}
          <div className="border-b border-gray-700 pb-4">
            <h2 className="text-lg font-semibold text-gray-800">Privacy</h2>
            <p className="text-gray-400 text-sm mb-2">Control who can see your profile</p>
            <select
              name="privacy"
              value={settings.privacy}
              onChange={handleSelectChange}
              className="w-full p-2 bg-white border border-gray-700   text-gray-800 rounded-lg focus:ring focus:ring-blue-500"
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>

          {/* Save Button */}
          <div className="text-right">
            <button
              onClick={handleSaveChanges}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
