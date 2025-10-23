import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './animations.css';
import { MdArrowOutward } from "react-icons/md";
import "@fontsource/luckiest-guy";  // Defaults to weight 400
import "@fontsource/bangers"; 
import food1 from "../assets/food1.jpg";
import { GiTomato } from "react-icons/gi";
import { GiCabbage } from "react-icons/gi";
import rice1 from "../assets/rice1.jpg";
import drteericebag from "../assets/drteericebag.jpg";
import bg from "../assets/bg.png";

import '@fontsource/poppins';



const Secone = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      setShowContent(true);
    }, []);

    return (
        <div 
            className="h-full pt-10 flex flex-col md:flex-row w-full justify-center text-black pb-10 bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${food1})` }}
        >
            {/* Optional: Add overlay for better text readability */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
            
            {/* Content wrapper with relative positioning to sit above overlay */}
            <div className="relative z-10 pt-40 px-2 flex flex-col align-middle">
                <h2 className={`text-4xl mb-4 md:text-6xl font-luckiest text-center md:text-start ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>IT'S PREMIUM </h2>
                <h2 className={`text-4xl mb-4 md:text-6xl font-luckiest text-center md:text-start ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>OR NOTHING</h2>

                <p className={`my-6 text-xl mt-10 md:mt-4 text-center md:text-start ${showContent ? 'p-slide-in' : 'hidden-initially'}`}>We sell Rice, Palm oil, Cryfish and Realestate in Abuja </p>

                <p className='text-[#059669] font-semibold text-center md:text-start'>INGREDIENTS</p>
                <ul className='flex gap-2 justify-center md:justify-start'>
                    <li className='text-center'><GiTomato className='text-red-500 text-center md:text-start'/></li>
                    <li><GiCabbage className='text-gray-400' /></li>
                    <li><div className='w-4 bg-[#fb923c] rounded-full text-white text-xs'>+3</div></li>
                </ul>

                <div className='flex gap-2 justify-center md:justify-start'>
                    <a href='https://wa.me/2348036178995' className=''>
                        <button className="bg-[#fb923c] text-white px-4 py-4 rounded-md mt-20 md:mt-10 flex">CONTACT US</button>
                    </a>
                </div>
            </div>

            <div className='relative z-10 flex py-10 md:py-20 px-2 md:px-20'>
                <img src={drteericebag} className='flex justify-center mt-10 ml-0 md:ml-16 w-full md:w-80 h-100 rounded-md' alt="bg" />
            </div>
        </div>
    )
}

export default Secone;