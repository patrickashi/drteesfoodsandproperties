import React from "react"
import abt_bg from "../assets/abt_bg.jpg";
import Testimonies from "../components/Testimonies";
import drteelogo from "../assets/drteelogo.png";

const Aboutusp = () => {
    return(
        <div className="pt-20 pb-4 ">
            <div className="bg-cover bg-center h-72 w-full pt-32 px-2 md:px-14"
                style={{ backgroundImage: `url(${abt_bg})` }} >
                <p className="text-5xl font-luckiest text-[#30ed5fe6]">About us</p>
            </div>

            <div className=" flex justify-between flex-col md:flex-row mx-2 md:mx-10 lg:mx-16 px-2 md:px-4 lg:px-6 py-10 rounded-lg bg-[#010101ed] mt-10 mb-4 text-white text-sm">
                    <div>
                        <p> 
                            About..
                        </p>
                        <p className="my-4">
                            Dr Tee's Foods and Properties is a leading provider of high-quality food products and real estate services in Abuja, Nigeria.
                        </p>
                        <p>
                            

                        </p>
                        <p className="my-4">
                           
                        </p>
                        <p className="">
                           
                        </p>
                        <p className="font-luckiest text-2xl text-yellow-600 mt-6 mb-2">
                            OUR CORE COMPETENCY
                        </p>
                        <p>
                           
                        </p>
                        <p>
                            
                        </p>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <img src={drteelogo} className="rounded-md w-40" alt="img" />
                    </div>
            </div>

            <div>
                <Testimonies />
            </div>
            
        </div>
    )
}
export default Aboutusp;