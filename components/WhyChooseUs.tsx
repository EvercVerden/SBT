"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Star, Zap, HeartHandshake, Globe, Coins, BarChart2, Share2, Users, Shield, Lightbulb } from 'lucide-react';

const reasons = [
  { text: "95% project success rate!", icon: <Star className="text-yellow-400" /> },
  { text: "Only 3% platform fee, lower than industry average", icon: <Zap className="text-purple-500" /> },
  { text: "24/7 creator support to help you succeed", icon: <HeartHandshake className="text-green-500" /> },
  { text: "Reach millions of potential backers worldwide", icon: <Globe className="text-blue-500" /> },
  { text: "Flexible funding options to suit your project needs", icon: <Coins className="text-yellow-500" /> },
  { text: "Powerful analytics tools to track your campaign progress", icon: <BarChart2 className="text-indigo-500" /> },
  { text: "Seamless integration with social media platforms", icon: <Share2 className="text-pink-500" /> },
  { text: "Dedicated community of anime and manga enthusiasts", icon: <Users className="text-red-500" /> },
  { text: "Secure and transparent fund management", icon: <Shield className="text-green-600" /> },
  { text: "Expert guidance on creating compelling project pitches", icon: <Lightbulb className="text-amber-500" /> },
];

export function WhyChooseUs() {
  const [currentReason, setCurrentReason] = useState(0);

  const handleClick = () => {
    setCurrentReason((prev) => (prev + 1) % reasons.length);
  };

  return (
    <div className="my-20 max-w-4xl mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-indigo-200 transform -skew-y-3 rounded-3xl"></div>
      <div className="bg-white rounded-2xl shadow-lg p-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
              Why Choose JTL Fund?
            </h3>
            <div className="flex items-center mb-8 text-lg h-24 transition-all duration-300 ease-in-out">
              {reasons[currentReason].icon}
              <p className="text-gray-700 ml-4">{reasons[currentReason].text}</p>
            </div>
            <Button 
              onClick={handleClick}
              className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all py-3 text-lg"
            >
              Tell Me More!
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <Image 
              src="https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Anime Cosplay" 
              width={600} 
              height={400}
              className="rounded-xl shadow-md w-full"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-pink-200 to-indigo-200 transform skew-y-3 rounded-3xl -z-10"></div>
    </div>
  );
}