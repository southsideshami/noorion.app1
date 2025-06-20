"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Clock } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-dark/95 backdrop-blur-md text-light shadow-lg border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-gold hover:text-gold/80 transition-colors">
            Noorion
          </Link>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-light hover:text-gold transition-colors font-medium">Home</Link>
            <Link href="/quran" className="text-light hover:text-gold transition-colors font-medium">Quran</Link>
            <Link href="/qibla" className="text-light hover:text-gold transition-colors font-medium">Qibla</Link>
            <Link href="/feed" className="text-light hover:text-gold transition-colors font-medium">Feed</Link>
            <Link href="/chat" className="text-light hover:text-gold transition-colors font-medium">Chat</Link>
            <Link href="/classes" className="text-light hover:text-gold transition-colors font-medium">Classes</Link>
          </div>

          {/* Right side - Prayer time and theme toggle */}
          <div className="flex items-center space-x-4">
            {/* Prayer Time Display */}
            <div className="hidden sm:flex items-center space-x-2 bg-gold/10 px-3 py-2 rounded-lg">
              <Clock className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-gold">Fajr: 04:30</span>
            </div>
            
            {/* Current Time */}
            <div className="hidden lg:flex items-center space-x-2 bg-olive/10 px-3 py-2 rounded-lg">
              <span className="text-sm font-medium text-olive">{formatTime(currentTime)}</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gold/20 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 