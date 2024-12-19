import React from "react";
import logo_youtube from "../assets/youtube.png"
import logo_telegram from "../assets/telegram.png"
import logo_thread from "../assets/threads.png"
import logo_inst from "../assets/inst.png"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container place-items-center mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 mt-8">
        {/* Первая колонна */}
        <div>
          <h4 className="text-lg font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Feedback</a></li>
            <li><a href="#" className="hover:text-gray-300">Contacts</a></li>
            <li><a href="#" className="hover:text-gray-300">Legal Information</a></li>
            <li><a href="#" className="hover:text-gray-300">Occupational Safety and Health</a></li>
          </ul>
        </div>

        {/* Вторая колонна */}
        <div className="mt-10 md:mt-0">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-4">
                <img className="w-7 h-7" src={logo_thread} alt="thread" />
                <a href="https://www.threads.net/@hyundai" target="_blank" className="hover:text-gray-300">Thread</a></li>
            <li className="flex items-center space-x-4">
                <img className="w-7 h-7" src={logo_youtube} alt="YT" />
                <a href="https://www.youtube.com/@HyundaiWorldwide" target="_blank" className="hover:text-gray-300">YouTube</a>
            </li>
            <li className="flex items-center space-x-4">
                <img className="w-7 h-7" src={logo_inst} alt="INST" />
                <a href="https://www.instagram.com/hyundaikz/" target="_blank" className="hover:text-gray-300">Instagram</a></li>
            <li className="flex items-center space-x-4">
                <img className="w-7 h-7" src={logo_telegram} alt="telegram" />
                <a href="#" target="_blank" className="hover:text-gray-300">Telegram</a></li>
          </ul>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="text-center mt-12 text-sm text-gray-400">
        &copy; 2024 Hyundai Auto Service. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
