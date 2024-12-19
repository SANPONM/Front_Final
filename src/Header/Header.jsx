import logo from "../assets/hyundai-img.png"
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo} alt="Hyundai Logo" className="h-10 w-auto"
          />
          <span className="text-xl font-bold">Hyundai Auto Service</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          
          <Navigation title = "Services"/>
          <Navigation title = "Models"/>
          <Navigation title = "Buy"/>
          <Navigation title = "Service"/>
          <Navigation title = "News"/>
        </nav>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-lg"
          onClick={() => alert('Mobile menu is not implemented yet!')}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
