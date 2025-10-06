
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PersonaRowProps {
    title: string;
    description: string;
    imageUrl: string;
}

const PersonaRow: React.FC<PersonaRowProps> = ({ title, description, imageUrl }) => (
    <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-[#1C1C1C]">{title}</h3>
            <p className="mt-3 text-lg text-gray-600">{description}</p>
        </div>
        <div className="flex-1">
            <img src={imageUrl} alt={title} className="rounded-2xl shadow-lg w-full max-w-md mx-auto" />
        </div>
    </div>
);

const WhoItsFor: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const personas = [
    { 
        title: "The Budget Beginner", 
        description: "Just starting out with budgeting? We'll guide you through the basics and help you build a solid financial foundation.",
        imageUrl: "https://i.imgur.com/4zYgQ5Z.png"
    },
    { 
        title: "The Debt Destroyer", 
        description: "Ready to tackle your debt? We'll help you create a repayment plan and stay motivated along the way.",
        imageUrl: "https://i.imgur.com/oJ5bY2s.png"
    },
    { 
        title: "The Savings Superstar", 
        description: "Want to boost your savings? We'll help you set goals, track your progress, and find ways to save more.",
        imageUrl: "https://i.imgur.com/IjlD1xG.png"
    },
  ];

  return (
    <section ref={ref} id="who-its-for" className={`py-20 md:py-28 bg-white section-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1C1C1C] mb-20 animate-child animate-child-1">
          Who it's for
        </h2>
        <div className="space-y-20">
          {personas.map((persona, index) => (
             <div key={index} className={`animate-child animate-child-${index + 2}`}>
                <PersonaRow {...persona} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
