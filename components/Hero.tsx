
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section ref={ref} id="hero" className={`container mx-auto px-6 py-20 md:py-32 section-animate ${isVisible ? 'is-visible' : ''}`}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1C1C1C] leading-tight animate-child animate-child-1">
            Your personal financial coach, in your pocket
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-lg mx-auto md:mx-0 animate-child animate-child-2">
            Get personalized financial advice and support, right in your favorite messaging app. We'll help you take control of your finances and achieve your goals.
          </p>
          <div className="mt-10 animate-child animate-child-3">
            <a
              href="#"
              className="inline-block bg-[#65D644] text-white text-xl font-bold py-4 px-10 rounded-lg shadow-md hover:bg-[#58b83a] transition-colors duration-300"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="flex justify-center animate-child animate-child-2">
          <img src="https://i.imgur.com/8LqC5g6.png" alt="Phone with messaging app" className="rounded-2xl shadow-xl max-w-sm w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
