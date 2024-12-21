import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from '../Facilities/ServiceCard.jsx';
import LearnMoreButton from '../Facilities/LearnMoreButton';
import ScheduleTestDrive from "../Facilities/SheduleTestDrive.jsx";
import Explore from "../Facilities/Explore.jsx";
import elentra from "../assets/hyundai-elentra.jpg";
import staria from "../assets/hyundai-staria.png";
import inRoad from "../assets/hyundaiRoad.jpeg";
import closeCar from "../assets/hyundaiPlan.jpeg";
import tOCar from "../assets/toHyundai.webp";
import repairCar from "../assets/repairHyundai.jpeg";
import sparesCar from "../assets/spares.jpg";

function HomePage() {
  const slides = [
    { url: "https://avatars.mds.yandex.net/get-verba/997355/2a0000018ae09b7f58f2dbccae6a1db05ceb/1200x900" },
    { url: "https://avatars.mds.yandex.net/get-verba/1030388/2a0000018cfcb8a8b1800155cf6ee0090a46/1200x900" },
    { url: "https://avatars.mds.yandex.net/get-verba/3587101/2a00000182279061e5a31f4828e1bba676b7/1200x900" },
    { url: "https://avatars.mds.yandex.net/get-verba/997355/2a0000018b2416193ae083642877afeb116d/1200x900" },
    {
      url: "https://avatars.mds.yandex.net/get-verba/1604130/2a0000017ff613dbe2112f7badbaed8e8fa7/1200x900"
    },
  ];

  const categories = [
    { id: 1, name: "Cars & Minivan" },
    { id: 2, name: "Trucks" },
    { id: 3, name: "Crossovers & SUVs" },
    { id: 4, name: "Electrified" },
  ];
  
  const carData = {
    1: [
      {
        id: 1,
        title: "Hyundai Elantra",
        description: "Reliable. Stylish. Efficient.",
        price: "10,500,000₸",
        mpg: "32/41 MPG",
        image: elentra,
      },
      {
        id: 2,
        title: "STARIA",
        description: "Luxury. Comfort. Performance.",
        price: "10,500,000₸",
        mpg: "26/35 MPG",
        image: staria,
      },
    ],
    2: [
      {
        id: 1,
        title: "Hyundai Elantra",
        description: "Reliable. Stylish. Efficient.",
        price: "10,500,000₸",
        mpg: "32/41 MPG",
        image: elentra,
      },
    ],
    3: [
      {
        id: 1,
        title: "Hyundai Elantra",
        description: "Reliable. Stylish. Efficient.",
        price: "10,500,000₸",
        mpg: "32/41 MPG",
        image: elentra,
      },
      {
        id: 2,
        title: "STARIA",
        description: "Luxury. Comfort. Performance.",
        price: "10,500,000₸",
        mpg: "26/35 MPG",
        image: staria,
      },
    ],
    4: [
      {
        id: 1,
        title: "Hyundai Elantra",
        description: "Reliable. Stylish. Efficient.",
        price: "10,500,000₸",
        mpg: "32/41 MPG",
        image: elentra,
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(3);
  const [isHovering, setIsHovering] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const cars = carData[selectedCategory] || [];

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const CARDS_TO_SHOW = isMobile ? 1 : 3;
  const CARDS_TO_SCROLL = isMobile ? 1 : 2;
  
  const visibleCards = useMemo(() => {
    const result = [];
    for (let i = 0; i < CARDS_TO_SHOW; i++) {
      const index = (currentIndex + i) % cars.length;
      result.push(cars[index]);
    }
    return result;
  }, [currentIndex, cars]);

  const handleCarChange = (direction) => {
    setCurrentIndex(prev => {
      if (direction === 'next') {
        const nextIndex = prev + CARDS_TO_SCROLL;
        return nextIndex >= cars.length ? 0 : nextIndex;
      }
      const prevIndex = prev - CARDS_TO_SCROLL;
      return prevIndex < 0 ? Math.max(0, cars.length - CARDS_TO_SHOW) : prevIndex;
    });
  };

  const handleSlideChange = (direction) => {
    if (direction === 'next') {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    } else {
      setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const CarCard = ({ car }) => (
    <div className="flex-shrink-0 w-full sm:w-[calc(100%-1rem)] md:w-[calc(100%/3-1rem)] bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
      <img
        src={car?.image}
        alt={car?.title}
        className="w-full h-48 sm:h-56 md:h-50 object-cover rounded-lg mb-4"
      />
      <h3 className="text-gray-800 text-lg sm:text-xl font-bold mb-2">{car?.title}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-4">{car?.description}</p>
      <p className="text-gray-800 text-base sm:text-lg font-semibold mb-4">
        {car?.price} | {car?.mpg}
      </p>
      <div className="flex gap-2 sm:gap-3">
         <Explore />
      </div>
    </div>
  );

  const NavigationButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/30 text-white p-2 rounded-full transition-all duration-300 ${
        isHovering ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ [direction === 'left' ? 'left' : 'right']: '1rem' }}
    >
      {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );

  return (
      <div className="w-full">
         <div 
        className="relative h-[50vh] sm:h-[70vh] md:h-screen bg-gray-200"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        />
        
        {/* Navigation buttons visible on hover and always on mobile */}
        <div className={`absolute inset-0 flex items-center justify-between p-4 ${
          isMobile ? 'opacity-100' : (isHovering ? 'opacity-100' : 'opacity-0')
        } transition-opacity duration-300`}>
          <button
            onClick={() => handleSlideChange('prev')}
            className="bg-black/20 hover:bg-black/30 text-white p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleSlideChange('next')}
            className="bg-black/20 hover:bg-black/30 text-white p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

        <section className="bg-gray-100 py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl text-gray-800 font-bold mb-6">Explore the road like never before</h1>
              <p className="text-gray-700 text-xl max-w-2xl mx-auto">
                Discover vehicles designed for innovation, performance, and power.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img
                  src= {closeCar}
                  alt="Featured vehicle"
                  className="w-full h-[500px] rounded-xl shadow-xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl scale-100 group-hover:scale-105"/>
              </div>

              <div className="space-y-8">
                <div className="relative group">
                  <img
                    src= {inRoad}
                    alt="Secondary vehicle"
                    className="w-full h-[300px] rounded-xl shadow-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl scale-100 group-hover:scale-105"/>
                </div>
                
                <div className="space-y-6 px-4">
                  <p className="text-gray-700 text-xl leading-relaxed">
                    Experience unmatched power with every mile. The all-new TRD Pro
                    is here to redefine your journeys with cutting-edge technology and
                    unprecedented performance capabilities.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <LearnMoreButton /> 
                    <ScheduleTestDrive />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-gray-50 border-t-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentIndex(0);
                }}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-colors ${
                  selectedCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Car Cards Carousel */}
          <div className="relative px-4 sm:px-8">
            <div className="overflow-hidden">
              <div 
                className="flex gap-4 transition-transform duration-500"
                style={{ transform: `translateX(-${(currentIndex * 100) / CARDS_TO_SHOW}%)` }}
              >
                {cars.map((car, index) => (
                  <CarCard key={`${car.id}-${index}`} car={car} />
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            {cars.length > CARDS_TO_SHOW && (
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleCarChange('prev')}
                  className={`bg-black/20 hover:bg-black/30 text-white p-2 rounded-full ${
                    currentIndex === 0 ? 'invisible' : ''
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => handleCarChange('next')}
                  className={`bg-black/20 hover:bg-black/30 text-white p-2 rounded-full ${
                    currentIndex >= cars.length - CARDS_TO_SHOW ? 'invisible' : ''
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-100 border-t-2">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold mb-3 sm:mb-4">Our Service</h2>
            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
              We provide high-quality services to provide you with
              Maximum enjoyment of owning a car.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              imageSrc={tOCar}
              title="Maintenance"
              description="Professional care of your car."
              link="/services"
            />
            <ServiceCard
              imageSrc={repairCar}
              title="Repair"
              description="Reliable repairs with quality assurance."
              link="/services"
            />
            <ServiceCard
              imageSrc={sparesCar}
              title="Spares"
              description="Original spare parts for a long service life."
              link="/services"
            />
          </div>
        </div>
      </section>
      
      </div>
  );
}

export default HomePage;