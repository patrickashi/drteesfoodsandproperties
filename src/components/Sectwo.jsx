import React from "react"
import { useInView } from 'react-intersection-observer';
import './animations.css';
import macroni from "../assets/macroni.jpg";
import { Link } from "react-router-dom";
import rice1 from "../assets/rice1.jpg";
import officefront from "../assets/officefront.jpg";


const Sectwo = () => {
    
    
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className="h-full flex flex-col md:flex-row w-full justify-center px-2  text-black pb-10">
           <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <div
            
                   className="transition-opacity duration-1000 ease-in-out  justify-center w-full mt-10 md:mt-0 hidden md:block ">
                    <img src={officefront} alt="img" className="w-full md:w-[400px] h-[300px] object-cover rounded-lg " />
                </div>
                <div className="w-full md:w-[700px]">
                    <a className="text-md bg-[#9d174d] text-white px-2 py-2 rounded-md font-luckiest">About us</a>
                    <h2
                     ref={ref}
                     className="transition-opacity duration-1000 ease-in-out text-4xl my-6 font-luckiest">Dr Tee's Foods and Properties</h2>
                    <p className="mt-6">
                        Dr. Tees Nigeria Limited is a diversified company engaged in farming and farm produce, construction,
                        real estate development and brokerage, marketing consultancy, cybersecurity services, health, safety
                        and environmental management, and general contracting. The company is committed to delivering quality,
                        innovation, and value across its operational sectors.

                    </p>
                    <Link to="/Aboutusp"> 
                        <button className="bg-[#fb923c] text-white text-sm px-4 py-2 rounded-lg mt-4 font-luckiest">LEARN MORE</button>
                    </Link>
                </div>
                <div
                   ref={ref}
                   className={`transition-opacity duration-1000 ease-in-out flex md:hidden justify-center w-full mt-10 md:mt-0 ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>
                    <img src={officefront} alt="img" className="w-full md:w-[400px] h-[300px] object-cover rounded-lg" />
                </div>

           </div>
        </div>
    )
}

export default Sectwo;