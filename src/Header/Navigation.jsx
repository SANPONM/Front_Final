import { Link } from "react-router-dom";

function Navigation(props) {
  const { title, link } = props;
  return (
    <Link to={link} className="relative text-lg focus:text-white hover:text-gray-300 transition-colors group">
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

export default Navigation;
