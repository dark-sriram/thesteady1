import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface StepCardProps {
    index: number;
    title: string;
    description: string;
    imageUrl: string;
    bgColor: string;
}

const StepCard: React.FC<StepCardProps> = ({ index, title, description, imageUrl, bgColor }) => {
    return (
        <div className="flex-1 flex flex-col items-start p-4">
            <div className={`rounded-2xl w-full h-56 flex items-center justify-center overflow-hidden ${bgColor} dark:bg-gray-800`}>
                 <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-6">
                <span className="text-xl font-bold text-gray-500 dark:text-gray-400">{(index + 1).toString().padStart(2, '0')}</span>
                <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-white mt-2">{title}</h3>
                <p className="mt-2 text-md text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </div>
    );
};


const HowItWorks: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const steps = [
    {
      title: "Connect your accounts",
      description: "Securely link your bank accounts and credit cards to give your coach a complete picture of your finances.",
      imageUrl: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-[#EAF3E8]"
    },
    {
      title: "Get personalized insights",
      description: "Your coach analyzes your spending, income, and goals to provide tailored advice and identify areas for improvement.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      bgColor: "bg-[#E0F2F1]"
    },
    {
      title: "Receive empathetic nudges",
      description: "Get timely reminders and encouragement to stay on track, delivered in a friendly, conversational style.",
      imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFjY291bnR8ZW58MHx8MHx8fDA%3D",
      bgColor: "bg-[#F9EFE5]"
    },
  ];

  return (
    <section ref={ref} id="how-it-works" className={`py-20 md:py-28 section-animate scroll-mt-20 ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1C1C1C] dark:text-white mb-16 animate-child animate-child-1">
          How it works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12">
          {steps.map((step, index) => (
             <div key={index} className={`w-full md:w-1/3 animate-child animate-child-${index + 2}`}>
                <StepCard {...step} index={index} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;