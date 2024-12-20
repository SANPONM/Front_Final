import React, { useState, useEffect } from "react";

// Компонент для отображения отзыва
const FeedbackItem = ({ feedback }) => {
  return (
    <div className="feedback-item bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="font-semibold text-lg">{feedback.name}</h3>
      <p className="text-gray-700">{feedback.comment}</p>
      <p className="text-gray-500 text-sm">Rating: {feedback.rating} / 5</p>
      <p className="text-gray-400 text-xs">Date: {feedback.date}</p>
    </div>
  );
};

const FeedbacksPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  // Здесь будет логика для загрузки данных из базы данных
  // Пока что добавим статические данные для теста
  useEffect(() => {
    const fetchFeedbacks = async () => {
      // Здесь будет запрос к серверу или базе данных
      // Для начала используем статические данные
      const data = [
        {
          id: 1,
          name: "John Doe",
          comment: "Great service and friendly staff!",
          rating: 5,
          date: "2024-12-20",
        },
        {
          id: 2,
          name: "Jane Smith",
          comment: "Good experience, but the car could be better.",
          rating: 4,
          date: "2024-12-18",
        },
      ];
      setFeedbacks(data);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Customer Feedbacks</h1>
      <div className="feedbacks-list">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => <FeedbackItem key={feedback.id} feedback={feedback} />)
        ) : (
          <p className="text-white">No feedbacks available yet.</p>
        )}
      </div>
    </div>
  );
};

export default FeedbacksPage;
