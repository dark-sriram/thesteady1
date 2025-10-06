
import React from 'react';
import type { GuideCardProps } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ShieldIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 2.056c4.522 0 8.34-2.29 9-5.944a11.955 11.955 0 00-1.382-8.944z" />
    </svg>
);
const MoneyIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1.667a1 1 0 01.621-.924l5.218-2.43A1 1 0 0120 2.778V5.25a1 1 0 01-1 1h-2.599M12 8V7m-3.599 1a1 1 0 01-1.242 0l-5.218-2.43A1 1 0 012 2.778V5.25a1 1 0 011 1h2.599" />
    </svg>
);
const ChartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);
const LoanIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M9 9H5.25M9 12H5.25M9 15H5.25" />
    </svg>
);

const GuideCard: React.FC<GuideCardProps & { href: string }> = ({ icon, title, href }) => (
    <a href={href} className="block p-6 rounded-lg bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center">
            <div className="bg-[#2A6F6F] p-3 rounded-full">
                {icon}
            </div>
            <h3 className="ml-4 text-xl font-bold text-[#1A1A1A]">{title}</h3>
        </div>
    </a>
);


const LearningHub: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    
    const guides = [
        { icon: <ShieldIcon />, title: "Emergency Fund Roadmap", href: "/guides/emergency-fund" },
        { icon: <MoneyIcon />, title: "If You Want to Be a Millionaire…", href: "/guides/millionaire" },
        { icon: <ChartIcon />, title: "Mutual Funds for Beginners", href: "/guides/mutual-funds" },
        { icon: <LoanIcon />, title: "Break the Loan App Cycle", href: "/guides/loan-app-cycle" },
    ];
    return (
        <section ref={ref} className={`py-16 md:py-24 bg-white section-animate ${isVisible ? 'is-visible' : ''}`}>
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-12 animate-child animate-child-1">
                    Free guides for everyone
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {guides.map((guide, index) => (
                        <div key={index} className={`animate-child animate-child-${index + 2}`}>
                            <GuideCard {...guide} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningHub;