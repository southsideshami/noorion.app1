"use client";
import React, { useState } from 'react';
import DailyReminder from '@/components/DailyReminder';
import SocialFeed from '@/components/SocialFeed';

const Index = () => {
  const [isLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-dark">
      {/* Prototype Banner */}
      <div className="bg-gold/10 border-b border-gold/20 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-dark/80">
            This is a prototype preview of Noorion
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
              Welcome to Noorion
            </h1>
            <p className="text-lg text-ivory max-w-2xl mx-auto">
              A modern Islamic social platform connecting Muslims worldwide through faith, knowledge, and community.
            </p>
          </div>

          {/* Daily Reminder Section */}
          <DailyReminder />

          {/* Social Feed Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-serif font-semibold text-gold">
                Community Feed
              </h2>
              <span className="text-sm text-ivory/70">
                Latest updates from verified creators
              </span>
            </div>
            <SocialFeed isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
