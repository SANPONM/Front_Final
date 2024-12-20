import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ServicesPage from "../Pages/ServicePage.jsx";
import ModelsPage from "../Pages/ModelsPage.jsx";
import AboutUsPage from "../Pages/AboutUsPage.jsx";
import NewsPage from "../Pages/NewsPage.jsx";
import AccountPage from '../Pages/AccountPage';
import SettingsPage from '../Pages/SettingsPage';
import { useState } from "react";
import logo from "../assets/hyundai-img.png";
import Navigation from "./Navigation";
import ProfileButton from "./ProfileButton";
import HomePage from "../Pages/HomePages.jsx";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Hyundai Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold hover:cursor-pointer">Hyundai</span>
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
            <button
              className="text-gray-300 hover:text-gray-100 border border-gray-500 px-3 py-1 rounded-lg transition duration-300"
              onClick={() => alert("Language change feature coming soon!")}
            >
              EN / RU
            </button>
            <ProfileButton />
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
            <div className="flex flex-col space-y-2">
              <Navigation title="Services" link="/services" />
              <Navigation title="Models" link="/models" />
              <Navigation title="About Us" link="/about-us" />
              <Navigation title="News" link="/news" />
            </div>

            <button
              className="text-gray-300 hover:text-gray-100 border border-gray-500 px-3 py-1 rounded-lg transition duration-300"
              onClick={() => alert("Language change feature coming soon!")}
            >
              EN / RU
            </button>

            <ProfileButton />
          </div>
        )}
      </header>

      {/* Routing logic */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default Header;
