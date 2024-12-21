import newCar from "../assets/newHyundaicar.jpeg";
import winterCar from "../assets/winter-hyundai.webp";
import awardCar from "../assets/hyundai-award.jpeg";
import bannerImage from "../assets/hyundaiRoad.jpeg";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    // Прокрутка страницы в начало при монтировании компонента
    window.scrollTo(0, 0);
  }, []);

  const news = [
    {
      id: 1,
      title: "New Hyundai Model Released",
      date: "2024-12-01",
      description: "Explore the latest features of the newly released Hyundai model.",
      image: newCar,
    },
    {
      id: 2,
      title: "Winter Maintenance Tips",
      date: "2024-11-20",
      description: "Check out the essential tips to prepare your Hyundai for a cold winter.",
      image: winterCar,
    },
    {
      id: 3,
      title: "Hyundai Awarded Best Car of the Year",
      date: "2024-10-15",
      description: "Hyundai's latest model wins the prestigious 'Car of the Year' award.",
      image: awardCar,
    },
  ];

  const handleLearnMore = () => {
    setIsExpanded((prev) => !prev);
    if (!isExpanded) {
      setTimeout(() => {
        document.getElementById("banner-section").scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  const handleReadMore = (newsItem) => {
    setSelectedNews(newsItem);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-white mb-12 mt-16">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((newsItem) => (
          <div key={newsItem.id} className="bg-gray-300 rounded-lg shadow-md overflow-hidden">
            <img src={newsItem.image} alt={newsItem.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{newsItem.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{newsItem.date}</p>
              <p className="text-gray-700 mb-4">{newsItem.description}</p>
              <button
                onClick={() => handleReadMore(newsItem)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Баннер с анимацией */}
      <div id="banner-section" className="mt-16 bg-gray-800 text-white rounded-lg shadow-lg relative overflow-hidden">
        <img
          src={bannerImage}
          alt="Big Banner"
          className="w-full h-72 object-cover"
        />
        {/* Контейнер с текстом и кнопкой */}
        <div
          className={`p-8 text-center transform transition-transform duration-500 ${
            isExpanded ? "translate-y-32" : "translate-y-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Discover Hyundai's New Horizons</h2>
          <p className="text-lg mb-6">
            Experience innovation, style, and performance like never before with our latest lineup.
          </p>
          <button
            onClick={handleLearnMore}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Дополнительная информация, появляющаяся сзади */}
        <div
          className={`absolute inset-0 bg-gray-100 text-gray-800 p-8 transition-opacity duration-500 overflow-y-auto ${
            isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ maxHeight: "400px" }}
        >
          <h3 className="text-2xl font-bold mb-4">Additional Information</h3>
          <p className="mb-4">
            <strong>"Innovation at the Core"</strong>
            <br />
            At Hyundai, innovation isn't just a goal—it's a commitment. From state-of-the-art electric vehicles to
            groundbreaking safety systems, our engineering ensures you stay ahead on every journey. Our latest models
            are equipped with advanced features like:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>SmartSense™ Technology</strong>: Providing unparalleled safety with adaptive cruise control,
              lane-keeping assist, and collision-avoidance systems.
            </li>
            <li>
              <strong>Eco-Friendly Powertrains</strong>: Experience reduced emissions and improved efficiency with our
              hybrid and electric options.
            </li>
            <li>
              <strong>Luxury Meets Comfort</strong>: From heated seats to panoramic sunroofs, every detail is designed
              with your comfort in mind.
            </li>
          </ul>
          <p className="mb-4">
            <strong>"Unleashing Performance"</strong>
            <br />
            Feel the power of precision engineering with Hyundai's latest TRD Pro lineup. Built for adventurers, it
            delivers:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Dynamic All-Wheel Drive for superior handling in any terrain.</li>
            <li>Turbocharged Engines for an exhilarating driving experience.</li>
            <li>Trail-Ready Durability to conquer off-road challenges with ease.</li>
          </ul>
          <p>
            <strong>"Seamless Connectivity"</strong>
            <br />
            Stay connected wherever you go:
          </p>
          <ul className="list-disc list-inside">
            <li>Apple CarPlay™ and Android Auto™ for effortless entertainment.</li>
            <li>Built-in navigation systems to guide you every mile.</li>
            <li>Remote control features via the Hyundai app for ultimate convenience.</li>
          </ul>
        </div>
      </div>

      {/* Модальное окно */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full flex">
            {/* Левая часть с изображением */}
            <div className="w-1/2">
              <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover rounded-l-lg" />
            </div>
            {/* Правая часть с информацией */}
            <div className="w-1/2 p-6">
              <h2 className="text-3xl font-bold mb-4">{selectedNews.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{selectedNews.date}</p>
              <p className="text-gray-700 mb-4">{selectedNews.description}</p>
              <p className="text-gray-600">
                Experience the best of Hyundai with cutting-edge technology, luxurious comfort, and unmatched performance.
                Explore more by visiting our official website or scheduling a test drive today.
              </p>
              <button
                onClick={closeModal}
                className="bg-red-600 text-white px-4 py-2 rounded-lg mt-6 hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;
