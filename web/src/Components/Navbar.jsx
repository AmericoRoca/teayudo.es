import React, { useEffect, useState } from "react";
import Logo from "../logo/logo";
import "./Navbar.css";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent py-6 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-1xl font-bold tracking-tighter">
          <Logo />
        </div>
      </div>
    </nav>
  );
};
