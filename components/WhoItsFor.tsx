
import React from 'react';
import type { PersonaCardProps } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const GigRiderIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#2A6F6F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l3-3 3 3" />
    </svg>
);
const StreetVendorIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#2A6F6F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);
const FreelancerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#2A6F6F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const OlderAdultIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#2A6F6F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const PersonaCard: React.FC<PersonaCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-[#1A1A1A]">{title}</h3>
        <p className="mt-2 text-lg text-gray-600">“{description}”</p>
    </div>
);

const WhoItsFor: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const personas: PersonaCardProps[] = [
    { icon: <GigRiderIcon />, title: "Gig Riders", description: "Earn ₹0–₹1500/day. Save without a salary." },
    { icon: <StreetVendorIcon />, title: "Street Vendors", description: "Cash in hand? We track it." },
    { icon: <FreelancerIcon />, title: "Freelancers", description: "Multiple incomes? We get it." },
    { icon: <OlderAdultIcon />, title: "Older Adults", description: "No app needed — just WhatsApp." },
  ];

  return (
    <section ref={ref} className={`py-16 md:py-24 bg-white section-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-12 animate-child animate-child-1">
          Built for real people like you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className={`animate-child animate-child-${index + 2}`}>
                <PersonaCard {...persona} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;