import { Link } from "react-router-dom";

function LearnMoreButton() {
  return (
    <Link
      to="/models"
      className="flex-1 text-center bg-black text-white py-2 px-3 sm:px-4 text-sm sm:text-base rounded hover:bg-gray-800 transition"
    >
      Explore
    </Link>
  );
}

export default LearnMoreButton;
