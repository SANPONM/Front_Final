function Navigation(props) {
    const { title } = props;
    return (
      <a
        href="#"
        className="relative text-lg focus:text-white hover:text-gray-300 transition-colors group"
      >
        {title}
        {/* Bottom animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
    );
  }
  
  export default Navigation;
  