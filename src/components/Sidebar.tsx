"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  BookOpen, 
  Clock, 
  Compass, 
  MessageCircle, 
  Users, 
  Bell, 
  Menu, 
  X,
  User,
  Settings,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Quran', href: '/quran', icon: BookOpen },
    { name: 'Prayer Times', href: '/qibla', icon: Clock },
    { name: 'Qibla', href: '/qibla', icon: Compass },
    { name: 'Chat', href: '/chat', icon: MessageCircle },
    { name: 'Classes', href: '/classes', icon: Users },
    { name: 'Conferences', href: '/conferences', icon: Bell },
    { name: 'Social Feed', href: '/feed', icon: Users },
  ];

  const userMenu = [
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Logout', href: '/auth', icon: LogOut },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-navy text-ivory border border-gold/20"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-navy border-r border-gold/20 z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gold/20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-2xl">☪️</div>
              <span className="text-xl font-serif font-bold text-gold">Noorion</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                      ${isActive(item.href)
                        ? 'bg-gold text-navy font-semibold'
                        : 'text-ivory hover:bg-gold/10 hover:text-gold'
                      }
                    `}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* User Menu */}
          <div className="p-4 border-t border-gold/20">
            <div className="space-y-2">
              {userMenu.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                      ${isActive(item.href)
                        ? 'bg-gold text-navy font-semibold'
                        : 'text-ivory hover:bg-gold/10 hover:text-gold'
                      }
                    `}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 