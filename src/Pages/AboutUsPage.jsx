import React from "react";
import about from "../assets/about_hyundai.jpg"

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Заголовок страницы */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8 mt-12">
          From pioneering automaker in Korea to global auto industry leader
        </h1>

        {/* Основной контент */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Описание компании */}
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

          {/* Картинка или блок с ключевыми преимуществами */}
          <div className="flex justify-center items-center">
            <img
              src={about}
              alt="Hyundai Service"
              className="rounded-lg shadow-lg mt-32"
            />
          </div>
        </div>

        {/* Преимущества */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Why Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Quality</h4>
              <p className="text-gray-700">
              We use only certified materials and technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Reliability</h4>
              <p className="text-gray-700">
              You can rely on us in any situation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Personalized Approach</h4>
              <p className="text-gray-700">
              We take your wishes and needs into account.
              </p>
            </div>
          </div>
        </div>

        {/* Контактная информация */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Свяжитесь с нами</h3>
          <p className="text-gray-700">
            Адрес: ул. Примерная, 123, г. Вашингтон, США
          </p>
          <p className="text-gray-700">Телефон: +1 (123) 456-7890</p>
          <p className="text-gray-700">Электронная почта: info@hyundai.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
