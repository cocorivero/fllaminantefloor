import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="dark-header">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-white">HANDYMAN</h1>
        <span className="text-2xl font-bold text-[#63a547] ml-1">SERVICE</span>
      </div>

      <nav className="dark-nav hidden md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="dark-nav-link"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* <div className="hidden md:block">
        <Button 
          className="btn-primary"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Get Quote
        </Button>
      </div> */}

      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-800 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="btn-primary mt-4"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};