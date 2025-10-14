import React from "react"

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaRegFileCode } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { TiGroup } from "react-icons/ti";
import drteelogo from "../assets/drteelogo.png";

const Footer = () => {
    return (
        <div className="duration-200 text-white ">
            <div className="flex gap-8 flex-col px-2 md:px-10 lg:px-16 py-10 md:flex-row bg-[#9d174d] justify-between pb-4">
                
                <div className="text-center">
                    <h1 className=" mb-4 font-luckiest text-[#fb923c] text-lg">INFORMATION</h1>
                    <p className="">Abuja, Nigeria</p>
                    <p className="">Call us now: +234 803 617 8995</p>
                    <p>Email: drtee@gmail.com</p>
                </div>
               
                <div className="text-center">
                    <div className="flex justify-center mb-2">
                        <img src={drteelogo}  className="w-32 rounded-md" alt="logo" />
                    </div>
                    <p className="mb-2">Feel free to discuss your Budget</p>
                    <ul className="flex justify-center gap-4">
                        <li className="border-r pr-2">
                            <a href="https://wa.me/2348036178995">
                                <FaWhatsapp className="mt-1 mr-1 text-white" />
                            </a>
                        </li>
                        <li className="">
                            <a href="#">
                                <FaInstagram className="mt-1 mr-1 text-white"/>
                            </a>
                        </li>
                        {/* <li className="border-r pr-2">
                            <a href="https://www.TikTok.com/">
                                <FaTiktok className="mt-1 mr-1 text-white"/>
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div className="text-center">
                    <h1 className=" mb-4 font-luckiest text-[#fb923c] text-lg">WORKING HOURS</h1>
                    <p>We are open 24/7</p>
                    
                </div>
            </div>

            <div className="flex flex-col gap-2  text-center py-4 px-2 md:px-10 lg:px-16 text-xs text-white bg-[#9d174d]">
                
                <div>©2025 all rights reserved <span className="text-[#fb923c]">Dr Tee's Foods and properties</span> </div>
            </div>
        </div>
    )
}

export default Footer;