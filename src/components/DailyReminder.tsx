"use client";
import React from 'react';
import { Lightbulb, Calendar } from 'lucide-react';

const DailyReminder = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const dailyReminder = {
    quote: "The best of you are those who are best to their families.",
    author: "Prophet Muhammad (ﷺ)",
    category: "Family & Relationships"
  };

  return (
    <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-gold" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar className="w-4 h-4 text-olive" />
            <span className="text-sm text-ivory/70">{formattedDate}</span>
          </div>
          <h3 className="text-lg font-serif font-semibold text-gold mb-2">
            Daily Reminder
          </h3>
          <blockquote className="text-ivory mb-3 italic">
            &ldquo;{dailyReminder.quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-between">
            <span className="text-sm text-olive font-medium">
              — {dailyReminder.author}
            </span>
            <span className="text-xs text-ivory/60 bg-olive/10 px-2 py-1 rounded-full">
              {dailyReminder.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyReminder; 