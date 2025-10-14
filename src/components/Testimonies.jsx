import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Correct module imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import local images

const Testimonies = () => {
  const Testimonies = [
    {
    //   img: okraandfish,
      name: 'Julie',
      description: "Rice Tastes really good and is stone Free",

    },
    {
    //   img: ohasoup,
      name: 'Mr Shina',
      description: "Best Rice I've Eaten all Year ",

     
    },
    {
    //   img: rice1,
      name: 'Toyin O.',
      description: "Hi Dr Tee, Thank you again for such a Fantastic Palm Oil. So many compliments were received about the food! ",
      
    },
    {
        // img: chickenstew,
        name: 'Mr David.',
        description: "Love My New Apartment Thanks Dr Tee",
        
    },
    // {
    //     // img: chickenstew,
    //     name: 'Richard',
    //     description: "Hi Rita! The food was wonderful and all guests enjoyed it very much! Thanks again for all that you do! ",
        
    // },
    // {
    //     // img: chickenstew,
    //     name: 'Valerie',
    //     description: "I just wanted to say thank you for setting this up today, the food was phenomenal. I am looking forward to our next event with your team.",
        
    // },
    // {
    //     // img: chickenstew,
    //     name: 'Anthonia',
    //     description: "Thank you very much for the awesome service and the fantastic food!! Everyone is still raving about how they loved the food and a lot of them have asked my boss, to use you in the future. Great job!! I look forward to you taking care of us at future events.",
        
    // },
    // {
    //     // img: chickenstew,
    //     name: 'Lanre',
    //     description: "This order, as with all prior orders, was excellent. In this busy world, it is nice to know that I can place one call to you, select a menu, tell you how many guests I will be serving and then you make it all happen. You do an amazing job and I truly appreciate it.",
        
    // },
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
      {Testimonies.map((testimony, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white pt-10 pb-10 mx-2 md:mx-0  shadow-lg items-center flex flex-col justify-center ">
                <p className='text-center  mb-2'>
                  <div className='bg-[#2563eb] text-white px-2 py-1 rounded-md font-luckiest'>Testimonies</div>
                </p>
                <p className='text-4xl text-center font-luckiest mb-16'>Our Satisfied Customers</p>
                <div className='group bg-white w-[400px]  border border-gray-400 hover:border-none hover:bg-[#9d174d]  rounded-2xl pb-10 px-10 md:px-4 mb-2 hover:scale-105 duration-200 cursor-pointer hover:text-white'>
                    {/* <img src={testimony.img} alt={testimony.title} className="w-full object-cover h-20 rounded-lg mt-[-40px]" /> */}
                    <p className=" mt-2 font-comic">what our clients say</p>
                    <h3 className="group-hover:text-[#fb923c]  font-semibold mt-2 font-luckiest">{testimony.name}</h3>
                    <p>{testimony.description}</p>
                    {/* <p className='font-luckiest'>N{food.price}</p> */}
                    
                </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonies;
