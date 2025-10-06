
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
            <div className={`rounded-2xl w-full h-56 flex items-center justify-center overflow-hidden ${bgColor}`}>
                 <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-6">
                <span className="text-xl font-bold text-gray-500">{(index + 1).toString().padStart(2, '0')}</span>
                <h3 className="text-2xl font-bold text-[#1C1C1C] mt-2">{title}</h3>
                <p className="mt-2 text-md text-gray-600">{description}</p>
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
      imageUrl: "https://i.imgur.com/nophYyP.png",
      bgColor: "bg-[#EAF3E8]"
    },
    {
      title: "Get personalized insights",
      description: "Your coach analyzes your spending, income, and goals to provide tailored advice and identify areas for improvement.",
      imageUrl: "https://i.imgur.com/yV2gA5d.png",
      bgColor: "bg-[#E0F2F1]"
    },
    {
      title: "Receive empathetic nudges",
      description: "Get timely reminders and encouragement to stay on track, delivered in a friendly, conversational style.",
      imageUrl: "https://i.imgur.com/2Y5u06G.png",
      bgColor: "bg-[#F9EFE5]"
    },
  ];

  return (
    <section ref={ref} id="how-it-works" className={`py-20 md:py-28 section-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1C1C1C] mb-16 animate-child animate-child-1">
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
