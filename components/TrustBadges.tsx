
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);
const HandshakeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);
const IndiaIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.88 7.354A5.925 5.925 0 0112 5.5a5.925 5.925 0 014.12 1.854M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);

const TrustBadges: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    const badges = [
        { icon: <LockIcon />, text: "We delete your messages. Always." },
        { icon: <HandshakeIcon />, text: "No data selling. Ever." },
        { icon: <IndiaIcon />, text: "Made for India, by Indians." },
    ];

    return (
        <section ref={ref} className={`bg-gray-100 py-12 section-animate ${isVisible ? 'is-visible' : ''}`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
                    {badges.map((badge, index) => (
                        <div key={index} className={`flex items-center text-center animate-child animate-child-${index + 1}`}>
                            {badge.icon}
                            <p className="ml-3 text-lg text-gray-600 font-medium">{badge.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;