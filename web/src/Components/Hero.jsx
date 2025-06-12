import React, { useEffect, useRef } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { ThreeScene } from '../ThreeScene'
export const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="!text-4xl !md:text-6xl !lg:text-7xl !font-bold !mb-6 !tracking-tight">
            <span className="block">Creative Developer</span>
            <span className="block mt-2 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Building Digital Experiences
            </span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl mb-10">
            Transforming ideas into elegant, functional solutions through code
            and creativity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="!px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="!px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon size={30} className="text-white opacity-70" />
      </div>
    </section>
  )
}
