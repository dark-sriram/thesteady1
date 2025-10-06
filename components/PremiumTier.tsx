
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PremiumTier: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section ref={ref} className={`py-16 md:py-24 bg-teal-50/50 section-animate ${isVisible ? 'is-visible' : ''}`}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 animate-child animate-child-1">
                    Go deeper with a personal mentor
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 animate-child animate-child-2">
                    Ready for the next step? Get 1-on-1 guidance with a dedicated mentor to build a personal financial roadmap.
                </p>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center animate-child animate-child-3">
                    <div className="w-full md:w-1/2">
                        <img src="https://picsum.photos/seed/mentor/800/600" alt="Friendly Mentor Priya Didi" className="object-cover w-full h-64 md:h-96" />
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-12 text-left">
                        <h3 className="text-3xl font-bold text-[#1A1A1A]">Priya Didi – Ex-Rider</h3>
                        <p className="text-xl text-gray-600 mt-2">"I'm here to help you build a plan, one step at a time. We'll do it together."</p>
                         <a href="/mentor" className="mt-8 inline-block bg-[#2A6F6F] text-white text-xl font-bold py-4 px-10 rounded-lg shadow-md hover:bg-teal-800 transition-colors duration-300 w-full sm:w-auto text-center">
                            Meet Your Mentor →
                        </a>
                        <p className="mt-6 text-sm text-gray-500">
                            *Free coaching is always available.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumTier;