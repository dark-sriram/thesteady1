import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface GuideCardProps {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
}

const GuideCard: React.FC<GuideCardProps> = ({ title, description, imageUrl, href }) => (
    <a href={href} className="block bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-white">{title}</h3>
                <p className="mt-2 text-md text-gray-600 dark:text-gray-300">{description}</p>
            </div>
            <img src={imageUrl} alt={title} className="w-32 h-32 rounded-lg object-cover" />
        </div>
    </a>
);


const LearningHub: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    
    const guides = [
        { 
            title: "5 Tips for Better Budgeting", 
            description: "Learn simple strategies to create and stick to a budget that works for you.", 
            imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop",
            href: "/guides/emergency-fund" 
        },
        { 
            title: "Understanding Credit Scores", 
            description: "Demystify credit scores and learn how to improve yours for better financial opportunities.", 
            imageUrl: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=2070&auto=format&fit=crop",
            href: "/guides/mutual-funds" 
        },
    ];

    return (
        <section ref={ref} id="learning-hub" className={`py-20 md:py-28 bg-white dark:bg-gray-800 section-animate scroll-mt-20 ${isVisible ? 'is-visible' : ''}`}>
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1C1C1C] dark:text-white mb-16 animate-child animate-child-1">
                    Learning Hub Preview
                </h2>
                <div className="space-y-8">
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