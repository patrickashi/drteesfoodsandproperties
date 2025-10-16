import React, { useState, useEffect, useRef } from "react"
import abt_bg from "../assets/abt_bg.jpg";
import Testimonies from "../components/Testimonies";
import drteelogo from "../assets/drteelogo.png";
import { Building2, Leaf, ShieldCheck, TrendingUp, Globe, Users } from "lucide-react";

const Aboutusp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState({
        years: 0,
        projects: 0,
        clients: 0,
        services: 0
    });
    const statsRef = useRef(null);

    const finalValues = {
        years: 10,
        projects: 500,
        clients: 100,
        services: 6
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [isVisible]);

    const animateCounters = () => {
        const duration = 5000; // 5 seconds
        const steps = 60; // Number of updates
        const stepDuration = duration / steps;

        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
                years: Math.floor(finalValues.years * progress),
                projects: Math.floor(finalValues.projects * progress),
                clients: Math.floor(finalValues.clients * progress),
                services: Math.floor(finalValues.services * progress)
            });

            if (currentStep >= steps) {
                clearInterval(interval);
                setCounts(finalValues); // Ensure final values are exact
            }
        }, stepDuration);
    };

    const objectives = [
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Agricultural Excellence",
            description: "Farming, processing, packaging, and distribution of premium agricultural products."
        },
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Construction & Real Estate",
            description: "Civil engineering works, property development, and comprehensive real estate services."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Marketing Consultancy",
            description: "Strategic marketing, advertising, and business development solutions."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Cybersecurity Services",
            description: "Digital risk assessments, IT solutions, and comprehensive security consultancy."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "HSE Management",
            description: "Health, safety, and environmental consultancy, training, and compliance services."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "General Contracting",
            description: "Procurement, supply chain management, and project execution across sectors."
        }
    ];

    return(
        <div className="pt-28 pb-4 bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-96 w-full flex items-center justify-center overflow-hidden"
                style={{ backgroundImage: `url(${abt_bg})` }} >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl md:text-7xl font-luckiest text-white mb-4 animate-fade-in">About Us</h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">Delivering Quality, Innovation, and Value Across Multiple Sectors</p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                {/* Company Overview */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-block bg-[#30ed5fe6] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                Who We Are
                            </div>
                            <h2 className="text-4xl font-luckiest text-gray-900 mb-6">Dr. Tees Nigeria Limited</h2>
                            <p className="text-gray-700 leading-relaxed text-lg mb-4">
                                Dr. Tees Nigeria Limited is a diversified company engaged in farming and farm produce, construction, real estate development and brokerage, marketing consultancy, cybersecurity services, health, safety and environmental management, and general contracting.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                We are committed to delivering quality, innovation, and value across all our operational sectors, ensuring excellence in every project we undertake.
                            </p>
                        </div>
                        <div className="md:w-64">
                            <img src={drteelogo} className="rounded-2xl w-full shadow-lg hover:scale-105 transition-transform duration-300" alt="Dr Tees Logo" />
                        </div>
                    </div>
                </div>

                {/* Our Objectives */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-luckiest text-gray-900 mb-4">Our Core Services</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            We provide comprehensive solutions across multiple industries, driven by expertise and innovation
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                <div className="bg-gradient-to-br from-[#30ed5fe6] to-[#059669] text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                    {objective.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Competency Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white mb-12">
                    <h2 className="text-4xl font-luckiest text-[#30ed5fe6] mb-6">Our Core Competency</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-[#fb923c]">Excellence in Execution</h3>
                            <p className="text-gray-300 leading-relaxed">
                                We deliver projects with precision, combining technical expertise with innovative solutions to exceed client expectations across all sectors.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-[#fb923c]">Sustainable Growth</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Our commitment to sustainability and ethical practices ensures long-term value creation for our clients, partners, and communities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <p className="text-4xl font-luckiest text-[#30ed5fe6] mb-2">{counts.years}+</p>
                        <p className="text-gray-600 font-semibold">Years Experience</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <p className="text-4xl font-luckiest text-[#fb923c] mb-2">{counts.projects}+</p>
                        <p className="text-gray-600 font-semibold">Projects Completed</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <p className="text-4xl font-luckiest text-[#2563eb] mb-2">{counts.clients}+</p>
                        <p className="text-gray-600 font-semibold">Happy Clients</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <p className="text-4xl font-luckiest text-[#9d174d] mb-2">{counts.services}</p>
                        <p className="text-gray-600 font-semibold">Core Services</p>
                    </div>
                </div>
            </div>

            {/* Testimonies Section */}
            <div className="bg-white py-16">
                <Testimonies />
            </div>
        </div>
    )
}
export default Aboutusp;