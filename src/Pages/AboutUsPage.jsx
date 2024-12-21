import React from "react";
import about from "../assets/about_hyundai.jpg";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Заголовок страницы */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8 mt-20">
          From pioneering automaker in Korea to global auto industry leader
        </h1>

        {/* Основной контент */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 mt-32">Hyundai Auto Service</h2>
            <p className="text-gray-700 mb-4">
              Hyundai Motor Company has served as the trailblazer of Korea’s automobile industry 
              since rolling out its Pony, developed with its own exclusive technology. Hyundai Motor 
              Company has risen as a globally recognized automobile manufacturer that exports its branded 
              vehicles to over 200 countries. It is equipped with production bases all around the world. It is 
              expanding the automobile market through its success in mass-producing hydrogen-powered vehicles 
              for the first time in the world and launching GENESIS, a high-end brand, while propelling the future 
              mobility industry forward based on its leadership in autonomous driving and connectivity technologies. 
              It seeks to find better solutions for humanity by achieving technological innovation under the aim of 
              "Progress for Humanity".
            </p>
            <p className="text-gray-700">
              Our team consists of professionals with many years of experience who strive to make your life more comfortable by providing the best service for your car.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={about} alt="Hyundai Service" className="rounded-lg shadow-lg mt-32" />
          </div>
        </div>

        {/* Таймлайн с дополнительной информацией */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Highlights Our Stories</h3>
          <div className="timeline">
            {/* 1967 Timeline Item */}
            <div className="group relative mb-8 ml-6">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full -left-4 relative"></div>
              <h4 className="text-lg font-semibold">1967</h4>
              <p className="text-gray-700">Hyundai Motor Company was founded in South Korea.</p>

              {/* Hidden information that slides from the bottom */}
              <div className="absolute left-0 top-full w-full p-4 bg-blue-100 text-gray-700 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p>Founded in 1967, Hyundai Motor Company has played a pivotal role in the automotive industry in South Korea.</p>
              </div>
            </div>

            {/* 1976 Timeline Item */}
            <div className="group relative mb-8 ml-6">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full -left-4 relative"></div>
              <h4 className="text-lg font-semibold">1976</h4>
              <p className="text-gray-700">Launched the Pony, Korea’s first mass-produced car.</p>

              {/* Hidden information that slides from the bottom */}
              <div className="absolute left-0 top-full w-full p-4 bg-blue-100 text-gray-700 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p>The Pony was a groundbreaking vehicle for Hyundai and helped to establish the company as a major force in the global automotive market.</p>
              </div>
            </div>

            {/* 2020 Timeline Item */}
            <div className="group relative mb-8 ml-6">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full -left-4 relative"></div>
              <h4 className="text-lg font-semibold">2020</h4>
              <p className="text-gray-700">Mass production of hydrogen-powered vehicles begins.</p>

              {/* Hidden information that slides from the bottom */}
              <div className="absolute left-0 top-full w-full p-4 bg-blue-100 text-gray-700 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p>Hyundai made significant strides in sustainability with the launch of mass-produced hydrogen-powered vehicles in 2020.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Преимущества */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-6 text-center">Why Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Quality</h4>
              <p className="text-gray-700">We use only certified materials and technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Reliability</h4>
              <p className="text-gray-700">You can rely on us in any situation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Personalized Approach</h4>
              <p className="text-gray-700">We take your wishes and needs into account.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
