import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Correct module imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import local images
import okraandfish from "../assets/okraandfish.jpg";
import ohasoup from '../assets/ohasoup.jpg';
import rice1 from '../assets/rice1.jpg';
import chickenstew from "../assets/chickenstew.jpg";

const FoodSlider = () => {
  const foodItems = [
    {
      img: rice1,
      title: 'Rice',
      description: 'High Quality Rice for all your Meals.',

    },
    {
      img: rice1,
      title: 'Palm Oil',
      description: 'High-quality palm oil for your cooking needs.',
    },
    {
      img: rice1,
      title: 'Real Estate',
      description: 'Find your dream property with us.',
      
    },
    {
        img: rice1,
        title: 'cryfish',
        description: 'Special Cryfish.',
        
      },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]} // Swiper automatically uses these modules
      spaceBetween={50}
      slidesPerView={1}
      navigation // Enables next/prev buttons
      pagination={{ clickable: true }} // Enables pagination
    //   scrollbar={{ draggable: true }} // Enables draggable scrollbar
    >
      {foodItems.map((food, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white pt-10 pb-10  shadow-lg items-center flex flex-col justify-center ">
                <p className='text-center  mb-2'>
                  <div className='bg-[#2563eb] text-white px-2 py-1 rounded-md font-luckiest'>Favorites</div>
                </p>
                <p className='text-4xl text-center font-luckiest mb-16'>Customers Favorite</p>
                <div className='group bg-white  border border-gray-400 hover:border-none hover:bg-[#9d174d]  rounded-2xl pb-10 px-4 mb-6 hover:scale-105 duration-200 cursor-pointer hover:text-white mx-2'>
                    <img src={food.img} alt={food.title} className="w-full object-cover h-72 rounded-lg mt-[-40px]" />
                    <p className=" mt-2 font-comic">Special</p>
                    <h3 className="group-hover:text-[#fb923c]  font-semibold mt-2 font-luckiest">{food.title}</h3>
                    <p>{food.description}</p>
                    {/* <p className='font-luckiest'>N{food.price}</p> */}
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
