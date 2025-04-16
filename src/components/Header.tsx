
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-highlight font-mono tracking-tighter">
          DM<span className="text-white">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-highlight font-mono mr-1 text-sm">{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button asChild className="btn-primary ml-4">
            <a href="/dutt_mistry_cv.pdf" download="dutt_mistry_cv.pdf">
              Resume
            </a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-lightSlate" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-navy/95 z-40 flex flex-col justify-center items-center transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lightSlate hover:text-highlight text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-highlight font-mono mr-2">{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button asChild className="btn-primary mt-4">
            <a href="/dutt_mistry_cv.pdf" download="dutt_mistry_cv.pdf">
              Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
