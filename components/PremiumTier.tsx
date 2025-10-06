
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#65D644] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


const PremiumTier: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const features = ["Unlimited coaching", "Advanced insights", "Priority support"];

    return (
        <section ref={ref} id="pricing" className={`py-20 md:py-28 section-animate ${isVisible ? 'is-visible' : ''}`}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6 animate-child animate-child-1">
                    Premium Tier (Optional)
                </h2>
                
                <div className="mt-12 max-w-md mx-auto bg-white rounded-2xl border-2 border-[#EAF3E8] shadow-lg p-8 animate-child animate-child-2">
                   <div className="bg-[#EAF3E8] rounded-xl p-6">
                        <h3 className="text-2xl font-bold text-[#1C1C1C]">Premium</h3>
                        <p className="mt-2 text-gray-600">
                           <span className="text-5xl font-extrabold text-[#1C1C1C]">$9.99</span>
                           /month
                        </p>
                        <a href="/mentor" className="mt-4 block bg-[#65D644] text-white text-lg font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#58b83a] transition-colors duration-300 w-full">
                           Upgrade
                        </a>
                   </div>
                    <ul className="mt-8 space-y-4 text-left">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-lg text-gray-700">
                                <CheckIcon />
                                <span className="ml-3">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PremiumTier;
