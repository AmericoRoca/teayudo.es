import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Logo from "../../logo/logo"

export const NavbarDos = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goTo = (path) => {
    navigate(path)
    setIsOpen(false) // Cierra el menú móvil al navegar
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-black ${scrolled ? 'backdrop-blur-sm py-4' : 'py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-1xl font-bold tracking-tighter">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => goTo('/')}
            className="!text-gray-300 hover:text-white transition-colors px-4 py-4"
          >
            Home
          </button>
          <button
            onClick={() => goTo('/projects/static-websites')}
            className="!text-gray-300 hover:text-white transition-colors px-4 py-4"
          >
            Static Websites
          </button>
          <button
            onClick={() => goTo('/projects/3d-web')}
            className="!text-gray-300 hover:text-white transition-colors px-4 py-4"
          >
            3D Websites
          </button>
          <button
            onClick={() => goTo('/projects/ecommerce')}
            className="!text-gray-300 hover:text-white transition-colors px-4 py-4"
          >
            E-Commerce
          </button>
          <button
            onClick={() => goTo('/projects/custom-web-app')}
            className="!text-gray-300 hover:text-white transition-colors px-4 py-4"
          >
            Custom Web App
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <button
              onClick={() => goTo('/')}
              className="!text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
            >
              Home
            </button>
            <button
              onClick={() => goTo('/projects/static-websites')}
              className="!text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
            >
              Static Websites
            </button>
            <button
              onClick={() => goTo('/projects/3d-web')}
              className="!text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
            >
              3D Websites
            </button>
            <button
              onClick={() => goTo('/projects/ecommerce')}
              className="!text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
            >
              E-Commerce
            </button>
            <button
              onClick={() => goTo('/projects/custom-web-app')}
              className="!text-gray-300 hover:text-white transition-colors py-2"
            >
              Custom Web App
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
