import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LogoPlaceholder: React.FC<{ name: string }> = ({ name }) => (
    <div className="flex-1 text-center text-2xl font-bold text-gray-400 dark:text-gray-500 tracking-widest">
        {name}
    </div>
);


const TrustedBy: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    const logos = ["PINIMIAL", "NANTERAL", "INATUAL", "ELEMENT", "ORGANIC"];

    return (
        <section ref={ref} className={`bg-[#F9F9F7] dark:bg-gray-900 py-20 md:py-24 section-animate ${isVisible ? 'is-visible' : ''}`}>
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1C1C1C] dark:text-white mb-12 animate-child animate-child-1">
                    Trusted by thousands
                </h2>
                <div className="flex flex-wrap justify-around items-center gap-x-8 gap-y-10">
                    {logos.map((logo, index) => (
                         <div key={index} className={`animate-child animate-child-${index + 2}`}>
                             <LogoPlaceholder name={logo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;