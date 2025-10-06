
import React from 'react';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const PremiumTier: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-teal-50/50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-12">
                    Go deeper with a personal mentor
                </h2>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2">
                        <img src="https://picsum.photos/seed/mentor/800/600" alt="Friendly Mentor Priya Didi" className="object-cover w-full h-64 md:h-full" />
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-12">
                        <h3 className="text-3xl font-bold text-[#1A1A1A]">Priya Didi – Ex-Rider</h3>
                        <p className="text-xl text-gray-600 mt-2">Your personal guide to financial fitness.</p>
                        <ul className="space-y-4 mt-8 text-lg text-gray-700">
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3">1:1 WhatsApp voice calls</span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3">Personal roadmap: “Your ₹100/week = ₹3.2L in 20 years”</span>
                            </li>
                            <li className="flex items-start">
                                <CheckIcon />
                                <span className="ml-3">Learning hub access</span>
                            </li>
                        </ul>
                        <p className="mt-8 text-3xl font-bold text-[#1A1A1A]">
                            ₹79/week. <span className="text-xl font-normal">First week free.</span>
                        </p>
                         <a href="#" className="mt-8 inline-block bg-[#2A6F6F] text-white text-xl font-bold py-4 px-10 rounded-lg shadow-md hover:bg-teal-800 transition-colors duration-300 w-full sm:w-auto text-center">
                            Meet Your Mentor →
                        </a>
                        <p className="mt-6 text-sm text-gray-500">
                            *Free coaching always available. No pressure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumTier;
