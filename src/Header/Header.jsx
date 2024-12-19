import { useState } from "react";
import logo from "../assets/hyundai-img.png";
import Navigation from "./Navigation";
import ProfileButton from "./ProfileButton";  // Импортируем компонент кнопки профиля.

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Hyundai Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">Hyundai Auto Service</span>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden lg:flex space-x-6">
          <Navigation title="Services" />
          <Navigation title="Models" />
          <Navigation title="Buy" />
          <Navigation title="About Us" />
          <Navigation title="Testimonials" />
          <Navigation title="News" />
        </nav>

        {/* Profile and Language Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            className="text-gray-300 hover:text-gray-100 border border-gray-500 px-3 py-1 rounded-lg transition duration-300"
            onClick={() => alert("Language change feature coming soon!")}
          >
            EN / RU
          </button>
          <ProfileButton /> {/* Добавляем кнопку профиля */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-lg"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-700 p-4 flex flex-col space-y-4 animate__animated animate__fadeIn z-10">
          {/* Navigation Links with animation */}
          <div className="flex flex-col space-y-2">
            <Navigation title="Services" />
            <Navigation title="Models" />
            <Navigation title="Buy" />
            <Navigation title="About Us" />
            <Navigation title="Testimonials" />
            <Navigation title="News" />
          </div>

          {/* Language Selector */}
          <button
            className="text-gray-300 hover:text-gray-100 border border-gray-500 px-3 py-1 rounded-lg transition duration-300"
            onClick={() => alert("Language change feature coming soon!")}
          >
            EN / RU
          </button>

          {/* Profile Button */}
          <ProfileButton /> 
        </div>
      )}
    </header>
  );
};

export default Header;
