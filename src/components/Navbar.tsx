"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-border-color shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-wider drop-shadow-lg">
              FAHIM
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                className="text-text-sub hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <i className="fas fa-home mr-2 text-primary/70"></i>
                Home
              </Link>
              <Link 
                className="text-text-sub hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" 
                href="#about"
              >
                <i className="fas fa-user mr-2 text-primary/70"></i>
                About
              </Link>
              <Link 
                className="text-text-sub hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" 
                href="#skills"
              >
                <i className="fas fa-code mr-2 text-primary/70"></i>
                Skills
              </Link>
              <Link 
                className="text-text-sub hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" 
                href="#projects"
              >
                <i className="fas fa-project-diagram mr-2 text-primary/70"></i>
                Projects
              </Link>
              <Link 
                className="text-text-sub hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" 
                href="#contact"
              >
                <i className="fas fa-envelope mr-2 text-primary/70"></i>
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-sub hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-light border-t border-border-color">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              className="text-text-sub hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-home mr-2 text-primary/70"></i>
              Home
            </Link>
            <Link 
              className="text-text-sub hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" 
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-user mr-2 text-primary/70"></i>
              About
            </Link>
            <Link 
              className="text-text-sub hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" 
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-code mr-2 text-primary/70"></i>
              Skills
            </Link>
            <Link 
              className="text-text-sub hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" 
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-project-diagram mr-2 text-primary/70"></i>
              Projects
            </Link>
            <Link 
              className="text-text-sub hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-envelope mr-2 text-primary/70"></i>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;