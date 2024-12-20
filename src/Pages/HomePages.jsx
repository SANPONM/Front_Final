import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from '../Facilities/ServiceCard.jsx';
import LearnMoreButton from '../Facilities/LearnMoreButton';
import elentra from "../assets/hyundai-elentra.jpg";
import staria from "../assets/hyundai-staria.png";
import inRoad from "../assets/hyundaiRoad.jpeg";
import closeCar from "../assets/hyundaiPlan.jpeg";
import tOCar from "../assets/toHyundai.webp";
import repairCar from "../assets/repairHyundai.jpeg";
import sparesCar from "../assets/spares.jpg";
function HomePage() {
  const slides = [
    { url: "https://i.ytimg.com/vi/79lSVBwWWkI/maxresdefault.jpg" },
    { url: "https://img.youtube.com/vi/Xn6gHHD79hU/maxresdefault.jpg" },
    { url: "https://images3.alphacoders.com/138/1385776.jpg" },
    { url: "https://i.ytimg.com/vi/b9nVe3yKlg4/maxresdefault.jpg" },
    {
      url: "https://avatars.mds.yandex.net/i?id=bfe3f4bbe7b0ece26d904131f4286a1b_l-9840106-images-thumbs&n=13"
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

  const CARDS_TO_SHOW = 3;
  const CARDS_TO_SCROLL = 2;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(3);
  const [isHovering, setIsHovering] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const cars = carData[selectedCategory] || [];
  
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
    <div className="flex-shrink-0 w-full md:w-[calc(100%/3-1rem)] bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
      <img
        src={car?.image}
        alt={car?.title}
        className="w-full h-50 object-cover rounded-lg mb-4"
      />
      <h3 className="text-gray-800 text-xl font-bold mb-2">{car?.title}</h3>
      <p className="text-gray-600 mb-4">{car?.description}</p>
      <p className="text-gray-800 text-lg font-semibold mb-4">
        {car?.price} | {car?.mpg}
      </p>
      <div className="flex gap-3">
        <button className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
          Explore
        </button>
        <button className="flex-1 bg-gray-400 py-2 rounded hover:bg-gray-300 transition">
          Build
        </button>
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
          className="relative h-screen bg-gray-200 "
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
            className="w-full h-full bg-center bg-cover duration-500"
          />
          
          <NavigationButton direction="left" onClick={() => handleSlideChange('prev')} />
          <NavigationButton direction="right" onClick={() => handleSlideChange('next')} />

          <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 transition-opacity duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0'
          }`}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setSlideIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  slideIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"/>
              </div>

              <div className="space-y-8">
                <div className="relative group">
                  <img
                    src= {inRoad}
                    alt="Secondary vehicle"
                    className="w-full h-[300px] rounded-xl shadow-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"/>
                </div>
                
                <div className="space-y-6 px-4">
                  <p className="text-gray-700 text-xl leading-relaxed">
                    Experience unmatched power with every mile. The all-new TRD Pro
                    is here to redefine your journeys with cutting-edge technology and
                    unprecedented performance capabilities.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <LearnMoreButton /> 
                    <button className="bg-white text-black border-2 border-black py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                      Schedule Test Drive
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 border-t-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentIndex(0);
                  }}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? "bg-black text-white"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative overflow-hidden">
                <div className="flex gap-4 transition-transform duration-500" 
                    style={{ transform: `translateX(-${(currentIndex * 100) / CARDS_TO_SHOW}%)` }}>
                  {cars.map((car, index) => (
                    <CarCard key={`${car.id}-${index}`} car={car} />
                  ))}
                </div>
              </div>

              {cars.length > CARDS_TO_SHOW && (
                <>
                  <button
                    onClick={() => handleCarChange('prev')}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/20 hover:bg-black/30 text-white p-3 rounded-full transition-all duration-300 ${
                      isHovering ? 'opacity-100' : 'opacity-0'
                    } ${currentIndex === 0 ? 'invisible' : ''}`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => handleCarChange('next')}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/20 hover:bg-black/30 text-white p-3 rounded-full transition-all duration-300 ${
                      isHovering ? 'opacity-100' : 'opacity-0'
                    } ${currentIndex >= cars.length - CARDS_TO_SHOW ? 'invisible' : ''}`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(cars.length / CARDS_TO_SCROLL) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * CARDS_TO_SCROLL)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentIndex / CARDS_TO_SCROLL) === index
                      ? 'bg-black'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100 border-t-2">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-800 font-bold mb-4">Our Service</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                We provide high-quality services to provide you with
                Maximum enjoyment of owning a car.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                imageSrc= {tOCar}
                title="Maintenance"
                description="Professional care of your car."
                link= "/services"
              />
              <ServiceCard
                imageSrc= {repairCar}
                title="Repair"
                description="Reliable repairs with quality assurance."
                link="/services"
              />
              <ServiceCard
                imageSrc= {sparesCar}
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