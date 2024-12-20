import React from "react";
import serviceImage from "../assets/service-work.jpg"; // Путь к картинке с сервисом
import reviewMan from "../assets/man.png";
import reviewWoman from "../assets/girl.png";
import reviewBoy from "../assets/boy.png";

import { useEffect } from "react";

const ServicePage = () => {
  useEffect(() => {
    // Прокрутка страницы в начало при монтировании компонента
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Заголовок страницы */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8 mt-12">
          Premium Hyundai Auto Service for Your Car
        </h1>

        {/* Основной контент */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Описание сервиса */}
          <div>
            <h2 className="text-6xl font-extrabold mb-14 mt-32">Hyundai Auto Service</h2>
            <p className="text-gray-700 mb-4 text-2xl">
              Our Hyundai Auto Service is committed to providing you with exceptional service using the latest technology and certified parts. Whether you need routine maintenance, repairs, or diagnostics, our experienced technicians are here to ensure that your vehicle runs smoothly and efficiently. 
            </p>
            <p className="text-gray-700 text-2xl">
              We offer a variety of services, including oil changes, brake inspections, tire rotations, battery replacement, and more. With state-of-the-art equipment and a customer-first approach, we ensure that every service meets the highest standards.
            </p>
          </div>

          {/* Картинка сервиса */}
          <div className="flex justify-center items-center">
            <img
              src={serviceImage}
              alt="Hyundai Service"
              className="rounded-lg shadow-lg mt-32"
            />
          </div>
        </div>

        {/* Перечень услуг */}
        <div className="mt-12">
          <h3 className="text-6xl font-extrabold mb-6 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Routine Maintenance</h4>
              <p className="text-gray-700">
                Regular check-ups to keep your vehicle running at its best.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Repair Services</h4>
              <p className="text-gray-700">
                Expert repairs for all Hyundai models, ensuring safety and reliability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Diagnostics</h4>
              <p className="text-gray-700">
                Advanced diagnostic tools to identify and fix problems quickly.
              </p>
            </div>
          </div>
        </div>

        {/* Специальные предложения */}
        <div className="mt-20 bg-gray-800 w-full pt-8 pb-6">
          <h3 className="text-4xl font-semibold mb-6 text-center text-white">Special Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-md">
              <h4 className="text-white text-xl font-semibold mb-2">Free Check-up</h4>
              <p className="text-white">
                Get a free vehicle check-up with every oil change.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md">
              <h4 className="text-white text-xl font-semibold mb-2">Discounted Tires</h4>
              <p className="text-white">
                Enjoy up to 20% off on tire replacement services.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md">
              <h4 className="text-white text-xl font-semibold mb-2">Seasonal Maintenance</h4>
              <p className="text-white">
                Save on seasonal maintenance packages designed to keep your car in peak condition.
              </p>
            </div>
          </div>
        </div>


        {/* Отзывы клиентов */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Первый контейнер отзыва */}
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0 w-1/3 md:w-1/4">
                <img
                  src={reviewMan} // Пример картинки
                  alt="Customer 1"
                  className="rounded-full shadow-md"
                />
              </div>
              <div className="md:ml-6 mt-4 md:mt-0 w-2/3">
                <p className="text-gray-700 mb-4">"The service was excellent! My car is running like new. Highly recommend!"</p>
                <p className="text-gray-900 font-semibold">John Doe</p>
                <p className="text-gray-500">Customer</p>
              </div>
            </div>

            {/* Второй контейнер отзыва */}
            <div className="flex flex-col-reverse md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0 w-1/3 md:w-1/4 mb-4 md:mb-0">
                <img
                  src={reviewWoman} // Пример картинки
                  alt="Customer 2"
                  className="rounded-full shadow-md"
                />
              </div>
              <div className="md:ml-6 w-2/3">
                <p className="text-gray-700 mb-4">"Professional staff and great service. I always come here for all my car needs."</p>
                <p className="text-gray-900 font-semibold">Jane Smith</p>
                <p className="text-gray-500">Customer</p>
              </div>
            </div>

            {/* Третий контейнер отзыва */}
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0 w-1/3 md:w-1/4">
                <img
                  src={reviewBoy} // Пример картинки
                  alt="Customer 3"
                  className="rounded-full shadow-md"
                />
              </div>
              <div className="md:ml-6 mt-4 md:mt-0 w-2/3">
                <p className="text-gray-700 mb-4">"Fast and affordable service. I'm very satisfied with the work they did on my vehicle."</p>
                <p className="text-gray-900 font-semibold">Mark Johnson</p>
                <p className="text-gray-500">Customer</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Гарантия */}
        <div className="mt-12 bg-gray-200 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Our Guarantee</h3>
          <p className="text-gray-700 text-center">
            We provide a 12-month warranty on all our repairs and maintenance services. Our certified parts and experienced technicians ensure that your Hyundai receives the best care possible.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">How often should I bring my Hyundai for maintenance?</h4>
              <p className="text-gray-700">
                We recommend routine maintenance every 6 months or 5,000 miles, whichever comes first.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Do you offer emergency repair services?</h4>
              <p className="text-gray-700">
                Yes, we offer emergency repair services to get you back on the road as quickly as possible.
              </p>
            </div>
          </div>
        </div>

        {/* Контактная информация */} 
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-700">
            Address: 456 Example Street, Suite 789, Washington, USA
          </p>
          <p className="text-gray-700">Phone: +1 (234) 567-8901</p>
          <p className="text-gray-700">Email: service@hyundai.com</p>
        </div>

        {/* Интерактивная карта */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-center">Find Us</h3>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2444501202516!2d-122.08424978442093!3d37.42199967982513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4a2f5206a69%3A0xd624dcbdb73f9c59!2sGoogleplex!5e0!3m2!1sen!2sus!4v1616671345862!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        {/* Кнопка записи */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Book a Service?</h3>
          <p className="text-gray-700 mb-6">Book an appointment now and get your vehicle serviced by our experts.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Schedule an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
