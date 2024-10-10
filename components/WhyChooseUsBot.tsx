"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const reasons = [
  "We have a 95% project success rate!",
  "Our platform fee is only 3%, lower than industry average.",
  "24/7 creator support to help you succeed.",
  "Reach millions of potential backers worldwide.",
  "Flexible funding options to suit your project needs.",
  "Powerful analytics tools to track your campaign progress.",
  "Seamless integration with social media platforms.",
  "Dedicated community of anime and manga enthusiasts.",
  "Secure and transparent fund management.",
  "Expert guidance on creating compelling project pitches."
];

export function WhyChooseUsBot() {
  const [currentReason, setCurrentReason] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReason((prev) => (prev + 1) % reasons.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-16 max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-6 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 transform transition-transform duration-300 hover:scale-110">
          <Image 
            src="/anime-character.png" 
            alt="Anime character" 
            width={160} 
            height={160}
            className="object-contain"
          />
        </div>
        <div className="ml-24">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
            Why Choose JTL Fund?
          </h3>
          <p className={`text-gray-700 mb-6 text-lg h-20 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {reasons[currentReason]}
          </p>
          <Button 
            onClick={handleClick}
            className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all py-3 text-lg transform hover:scale-105"
          >
            Tell Me More!
          </Button>
        </div>
        <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-pink-100 rounded-full z-[-1] animate-pulse"></div>
        <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-indigo-100 rounded-full z-[-2] animate-pulse"></div>
      </div>
    </div>
  );
}