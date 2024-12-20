import { Link } from "react-router-dom";

function LearnMoreButton() {
  return (
    <Link
      to="/news"
      className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors"
    >
      Learn More
    </Link>
  );
}

export default LearnMoreButton;
