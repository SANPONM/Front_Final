import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-96">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Первая колонна */}
        <div>
          <h4 className="text-lg font-bold mb-4">Полезные ссылки</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Обратная связь</a></li>
            <li><a href="#" className="hover:text-gray-300">Контакты</a></li>
            <li><a href="#" className="hover:text-gray-300">Правовая информация</a></li>
            <li><a href="#" className="hover:text-gray-300">СОУТ</a></li>
          </ul>
        </div>

        {/* Вторая колонна */}
        <div>
          <h4 className="text-lg font-bold mb-4">Следите за нами</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">VK</a></li>
            <li><a href="#" className="hover:text-gray-300">YouTube</a></li>
            <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-300">Telegram</a></li>
          </ul>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; 2024 Hyundai Auto Service. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
