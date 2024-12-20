import { useState, useEffect } from "react";
import newCar from "../assets/mufasa-car.png";
import winterCar from "../assets/winter-hyundai.webp";
import awardCar from "../assets/hyundai-award.jpeg";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Функция для загрузки новостей
  useEffect(() => {
    // Симуляция запроса на сервер (можно заменить на реальный API запрос)
    setTimeout(() => {
      const fetchedNews = [
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
      setNews(fetchedNews);
      setLoading(false);
    }, 1000); // Задержка для имитации загрузки данных
  }, []);

  if (loading) {
    return <div>Loading news...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((newsItem) => (
          <div key={newsItem.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={newsItem.image} alt={newsItem.title} className="w-full h-60 object-cover " />
            <div className="p-6 ">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{newsItem.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{newsItem.date}</p>
              <p className="text-gray-700 mb-4">{newsItem.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
