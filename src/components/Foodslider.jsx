import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'; // Added Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import local images
import rawrice from "../assets/rawrice.jpg";
import palmoil from '../assets/palmoil.jpg';
import officefront from '../assets/officefront.jpg';
import cryfish from "../assets/cryfish.jpg";
import ogbono from "../assets/ogbono.jpg";

const FoodSlider = () => {
  const foodItems = [
    {
      img: rawrice,
      title: 'Rice',
      description: 'High Quality Rice for all your Meals.',
      price: 'N80,000 per bag'
    },
    {
      img: palmoil,
      title: 'Palm Oil',
      description: 'High-quality palm oil for your cooking needs.',
      price: 'N25,000 per can (25 ltrs)'
    },
    {
      img: officefront,
      title: 'Real Estate',
      description: 'Find your dream property with us.',
      price: 'Call for Price'
    },
    {
      img: cryfish,
      title: 'Cryfish',
      description: 'Special Cryfish.',
      price: 'N15,000 per bag'
    },
    {
      img: ogbono,
      title: 'Ogbono',
      description: 'Special Ogbono.',
      price: 'N12,000 per can'
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Added Autoplay module
      spaceBetween={50}
      slidesPerView={1}
      navigation // Enables next/prev buttons
      pagination={{ clickable: true }} // Enables pagination
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false, // Continues autoplay after user interaction
        pauseOnMouseEnter: true, // Pauses when hovering (optional, remove if not needed)
      }}
      loop={true} // Enables infinite loop
      loopAdditionalSlides={2} // Helps with loop smoothness
      watchSlidesProgress={true} // Ensures slides are tracked properly
    >
      {foodItems.map((food, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white pt-10 pb-10 shadow-lg items-center flex flex-col justify-center">
            <p className='text-center mb-2'>
              <div className='bg-[#2563eb] text-white px-2 py-1 rounded-md font-luckiest'>Products</div>
            </p>
            <p className='text-4xl text-center font-luckiest mb-16'>Our Products</p>
            <div className='group bg-white border border-gray-400 hover:border-none hover:bg-[#9d174d] rounded-2xl pb-10 px-4 mb-6 hover:scale-105 duration-200 cursor-pointer hover:text-white mx-2'>
              <img src={food.img} alt={food.title} className="w-full object-cover h-72 rounded-lg mt-[-40px]" />
              <p className="mt-2 font-comic">Special</p>
              <h3 className="group-hover:text-[#fb923c] mt-2 font-luckiest">{food.title}</h3>
              <p className="mb-2">{food.description}</p>
              <p className=' text-lg group-hover:text-[#fb923c] mt-2'>{food.price}</p>
              <a href='https://wa.me/2348036178995'>
                <p className='group-hover:bg-[#fb923c] text-sm font-luckiest bg-gray-800 py-2 rounded-lg mt-2 w-full text-center text-white'>ORDER NOW</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FoodSlider;