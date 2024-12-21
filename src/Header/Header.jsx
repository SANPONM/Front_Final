import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/hyundai-img.png";
import Navigation from "./Navigation";
import ProfileButton from "./ProfileButton";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="relative text-lg focus:text-white hover:text-white transition-colors ">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Hyundai Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold">Hyundai</span>
          </div>
        </Link>

        {/* Navigation (Desktop) */}
        <nav className="hidden lg:flex space-x-6">
          <Navigation title="Services" link="/services" />
          <Navigation title="Models" link="/models" />
          <Navigation title="About Us" link="/about-us" />
          <Navigation title="News" link="/news" />
        </nav>

        {/* Profile and Language Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          
          <ProfileButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-lg bg-blue-900"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-700 p-4 flex flex-col space-y-4 animate__animated animate__fadeIn z-10">
          <div className="flex flex-col space-y-2">
            <Navigation title="Services" link="/services" />
            <Navigation title="Models" link="/models" />
            <Navigation title="About Us" link="/about-us" />
            <Navigation title="News" link="/news" />
          </div>
          <ProfileButton />
        </div>
      )}
    </header>
  );
};

export default Header;
