import React, { useState } from "react";
import tuscon from "../assets/hyundai-tuscon.webp";
import elentra from "../assets/hyundai-elentra.jpg";
import sonata from "../assets/hyundai-sonata.jpg";
import staria from "../assets/hyundai-staria.png";
import konaNLine from "../assets/kona-n-line.png";
import elantraN from "../assets/elantra-n.png";
import creta from "../assets/creta.png";
import palisade from "../assets/palisade.png";
import santaFe from "../assets/santaFe.png";

const BuyPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    date: "",
    agreement: false,
  });

  const cars = [
    {
      id: 1,
      name: "Hyundai Elantra",
      year: 2023,
      rating: 4.5,
      price: 10500000,
      image: elentra,
    },
    {
      id: 2,
      name: "Hyundai Sonata",
      year: 2022,
      rating: 4.8,
      price: 13500000,
      image: sonata,
    },
    {
      id: 3,
      name: "Hyundai Tucson",
      year: 2023,
      rating: 4.7,
      price: 15500000,
      image: tuscon,
    },{
      id: 4,
      name: "STARIA",
      year: 2023,
      rating: 4.6,
      price: 24250000,
      image: staria,
    },{
      id: 5,
      name: "KONA N Line",
      year: 2023,
      rating: 4.2,
      price: 13500000,
      image: konaNLine,
    },{
      id: 6,
      name: "Elantra N",
      year: 2022,
      rating: 4.4,
      price: 18400000,
      image: elantraN,
    },{
      id: 7,
      name: "CRETA",
      year: 2021,
      rating: 4.3,
      price: 12000000,
      image: creta,
    },{
      id: 8,
      name: "PALISADE",
      year: 2023,
      rating: 4.4,
      price: 15258585,
      image: palisade,
    },{
      id: 9,
      name: "SANTA FE",
      year: 2023,
      rating: 4.2,
      price: 18250000,
      image: santaFe,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setFormData({ username: "", email: "", date: "", agreement: false });
  };

  const handleSubmit = () => {
    if (formData.agreement) {
      alert("Thank you for your booking!");
      closeModal();
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Buy a Hyundai</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{car.name}</h2>
            <p className="text-gray-600">Year: {car.year}</p>
            <p className="text-gray-600">Rating: {car.rating}</p>
            <p className="text-gray-800 font-bold">Price: {car.price} ₸</p>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => openModal("book")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Book
              </button>
              <button
                onClick={() => openModal("testDrive")}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg"
              >
                Test Drive
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {modalType === "book" ? "Book a Car" : "Test Drive"}
            </h2>
            <div className="space-y-4">
            <div>
  <label className="block text-gray-800">Name</label>
  <input
    type="text"
    name="username"
    value={formData.username}
    onChange={handleInputChange}
    className="w-full p-2 border rounded-lg bg-white text-gray-800"
  />
</div>
<div>
  <label className="block text-gray-800">Email</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    className="w-full p-2 border rounded-lg bg-white text-gray-800"
  />
</div>
<div>
  <label className="block text-gray-800">Date</label>
  <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleInputChange}
    className="w-full p-2 border rounded-lg bg-white text-gray-800"
  />
</div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-gray-800">
                  I have read and agree to the terms and conditions.
                </label>
              </div>
              <div className="text-sm text-gray-600">
                By booking, you agree to our policies and rules.
              </div>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full mt-4"
              >
                Submit
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg w-full mt-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyPage;
