import { useState } from "react";
import profile from "../assets/profile.png"; // Убедитесь, что путь к картинке правильный.

const ProfileButton = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-600 border border-gray-500 px-3 py-1 rounded-lg transition duration-300"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        <div className="flex items-center space-x-2">
          <img
            src={profile}
            alt="Profile"
            className="h-6 w-6 rounded-full"
          />
          <span className="hidden sm:inline">Profile</span>
        </div>
        <span className="sm:hidden">▼</span> {/* Для мобильных — стрелка вниз */}
      </button>

      {/* Profile Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-full bg-gray-700 rounded-lg shadow-lg z-20">
            <ul className="text-white">
            <li className="hover:bg-gray-600 rounded-lg px-4 py-2">My Account</li>
            <li className="hover:bg-gray-600 rounded-lg px-4 py-2">Settings</li>
            <li className="hover:bg-gray-600 rounded-lg px-4 py-2">Logout</li>
            </ul>
        </div>
       )}

    </div>
  );
};

export default ProfileButton;
