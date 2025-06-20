"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-sm text-light p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-gold">
          Noorion
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <Link href="/quran" className="hover:text-gold transition-colors">Quran</Link>
          <Link href="/qibla" className="hover:text-gold transition-colors">Qibla</Link>
          <Link href="/chat" className="hover:text-gold transition-colors">Chat</Link>
          <Link href="/feed" className="hover:text-gold transition-colors">Feed</Link>
          <Link href="/classes" className="hover:text-gold transition-colors">Classes</Link>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Fajr: 04:30</span>
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
    </nav>
  );
};

export default Navbar; 