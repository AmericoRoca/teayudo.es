import React, { useEffect, useRef } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { ThreeScene } from '../ThreeScene'
export const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center !bg-[#C4796C] justify-center overflow-hidden"
    >
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
        
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon size={30} className="text-white opacity-70" />
      </div>
    </section>
  )
}
