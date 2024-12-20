import React, { useState } from "react";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    privacy: "public",
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrivacyChange = (e) => {
    setSettings((prev) => ({ ...prev, privacy: e.target.value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        {/* Notifications */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">
            Enable Notifications
          </span>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() => handleToggle("notifications")}
            className="w-5 h-5"
          />
        </div>

        {/* Dark Mode */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">
            Dark Mode
          </span>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() => handleToggle("darkMode")}
            className="w-5 h-5"
          />
        </div>

        {/* Privacy Settings */}
        <div>
          <label className="text-lg font-semibold text-gray-800 block mb-2">
            Privacy
          </label>
          <select
            value={settings.privacy}
            onChange={handlePrivacyChange}
            className="w-full p-2 border rounded-lg bg-white text-gray-800"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </div>


        {/* Save Button */}
        <button
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => alert("Settings saved!")}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
