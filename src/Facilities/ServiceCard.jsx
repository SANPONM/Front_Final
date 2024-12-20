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
        className="inline-block px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
      >
        Details
      </Link>
    </div>
  );
}

export default ServiceCard;
