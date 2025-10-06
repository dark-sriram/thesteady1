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
            <h3 className="text-3xl font-bold text-[#1C1C1C] dark:text-white">{title}</h3>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">{description}</p>
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
        imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop"
    },
    { 
        title: "The Debt Destroyer", 
        description: "Ready to tackle your debt? We'll help you create a repayment plan and stay motivated along the way.",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
    },
    { 
        title: "The Savings Superstar", 
        description: "Want to boost your savings? We'll help you set goals, track your progress, and find ways to save more.",
        imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <section ref={ref} id="who-its-for" className={`py-20 md:py-28 bg-white dark:bg-gray-800 section-animate scroll-mt-20 ${isVisible ? 'is-visible' : ''}`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1C1C1C] dark:text-white mb-20 animate-child animate-child-1">
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