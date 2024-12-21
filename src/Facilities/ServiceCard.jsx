import { Link } from "react-router-dom";

function ServiceCard({ imageSrc, title, description, link }) {
  return (
    <div className="text-center">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[200px] object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Link
        to={link}
        className="inline-block px-6 py-3 mt-4 bg-black text-white rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors"
      >
        Details
      </Link>
    </div>
  );
}

export default ServiceCard;
