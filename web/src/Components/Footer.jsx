import React from 'react'
import Logo from "../logo/logo"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="!py-12 bg-white w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold tracking-tighter">
              <Logo/>
            </div>
          </div>
         
        </div>
      </div>
    </footer>
  )
}
