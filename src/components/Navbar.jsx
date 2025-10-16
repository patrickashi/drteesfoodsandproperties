import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import drteelogo from "../assets/drteelogo.png";
import { Link } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { TiGroup } from "react-icons/ti";
import { MdArrowOutward } from "react-icons/md";



const  Navbar = ({ handleContactClick, location }) => {
    const isHomePage = location.pathname === '/';
    const navBgClass = isHomePage ? 'bg-transparent' : 'bg-black';

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }

    const handleLinkClick = (sectionId) => {
        setNav(!nav); // Close the navbar
        if (sectionId) {
          document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        }
      };
      
    return ( 
        <div className={`flex bg-white/50 justify-between items-center fixed top-0 left-0 right-0 z-50 py-2 px-2 md:px-6 text-black ${navBgClass}`}>
            <div>
                <Link to="/">
                    <img className="w-32" src={drteelogo}  size={20} alt="logo" />
                </Link>
            </div>
            
            <div>
                <ul className="hidden mobile:hidden  md:flex lg:flex xl-flex 2xl:flex text-black mx-auto font-semibold  ">
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/Aboutusp">About us</Link>
                    </li>
                    <li className="p-4 hover:underline hover:cursor-pointer">
                        <Link to="/">Contact us</Link>
                    </li>
                    <li className="flex p-4 hover:underline hover:cursor-pointer bg-[#fb923c] text-white rounded-lg" >
                        <Link to="https://wa.me/2348036178995" className="flex ">
                            <div>PLACE AN ORDER </div>
                            
                        </Link>
                    </li>
                    
                </ul>
            </div>

            <button className="hidden p-4 hover:underline hover:cursor-pointer bg-[#fb923c] text-white rounded-lg text-xs">RESERVATION</button>

            <div onClick={handleNav} className="mobile:block md:hidden 2xl:hidden lg:hidden xl:hidden z-20">
                {nav ? <AiOutlineClose className="text-black z-80" size={20}/> : <AiOutlineMenu className="white " size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "fixed bg-white left-0 top-0 h-full w-[90%] ease-out duration-500" : "fixed left-[-100%]"}>

                <div className="flex align-middle mt-4 ml-2 ">
                    <Link to="/">
                        <img className="w-32" src={drteelogo}  size={20} alt="logo" />
                    </Link>
                </div>

                <ul className="flex flex-col p-4 my-6 gap-16 text-black">
                    <li className="" onClick={() => { handleLinkClick() } }>
                        <div className="flex align-middle">
                            {/* <TiGroup className="mt-1 mr-1 text-slate-800 "/> */}
                            <Link to="/">Home</Link> 
                        </div>
                    </li>
                    <li className="" onClick={() => { handleLinkClick() } }>
                        <div className="flex align-middle">
                            {/* <GrProjects className="mt-1 mr-1 text-emerald-500 "/> */}
                            <Link to="/Aboutusp">About us</Link>
                        </div>
                    </li>
                    <li className="" onClick={() => { handleLinkClick() } }>
                        <div className="flex align-middle">
                            {/* <FaRegFileCode className="mt-1 mr-1 text-purple-800 "/> */}
                            <Link to="/">Contact us</Link>
                        </div>
                    </li>
                    <li >

                    </li>
                </ul>
                <div className="ml-2" onClick={() => { handleLinkClick() }}>
                    <Link to="https://wa.me/2348036178995">
                        <button className="bg-[#fb923c] text-white px-4 py-4 rounded-md mt-20 md:mt-10 flex ">PLACE AN ORDER</button>
                    </Link>
                </div>

                <div className="flex gap-10 mb-auto ml-2 items-bottom mt-10">
                    <div>
                        <a href="https://wa.me/2348036178995">
                            <FaWhatsapp className="mt-1 mr-1 text-emerald-700" size={20} />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <FaInstagram className="mt-1 mr-1 text-red-600" size={20}/>
                        </a>
                    </div>
                    {/* <div>
                        <a href="https://www.TikTok.com/">
                            <FaTiktok className="mt-1 mr-1" size={20}/>
                        </a>
                    </div> */}
                   
                </div>

               
            </div>
        </div>
     );
}
 
export default Navbar;