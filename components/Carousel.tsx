"use client";

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const carouselItems = [
  { id: 1, image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80", title: "Anime Creators' Paradise", description: "Support innovative anime and manga projects" },
  { id: 2, image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80", title: "Cosplay Dreamers", description: "Help cosplayers bring their creative visions to life" },
  { id: 3, image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80", title: "Animation Innovation", description: "Be part of groundbreaking animation technologies" },
]

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="relative h-[600px] overflow-hidden mb-16 rounded-2xl">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-start px-12 md:px-24">
            <div className="text-left text-white max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">{item.title}</h2>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">{item.description}</p>
              <Button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all animate-fade-in-up animation-delay-400">
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
      >
        <ChevronRight className="h-12 w-12" />
      </button>
    </div>
  )
}