"use client";
import React, { useState } from 'react';

const mockMensClasses = [
  { id: 1, title: "Fiqh of Salah", time: "Saturdays @ 10:00 AM" },
  { id: 2, title: "Beginner's Arabic", time: "Mondays @ 7:00 PM" },
];

const mockWomensClasses = [
  { id: 1, title: "Tafsir of Surah Yusuf", time: "Sundays @ 11:00 AM" },
  { id: 2, title: "The Mothers of the Believers", time: "Wednesdays @ 6:00 PM" },
];

const ClassesPage = () => {
  const [activeTab, setActiveTab] = useState('men');

  const tabs = [
    { id: 'men', label: "Men's Classes" },
    { id: 'women', label: "Women's Classes" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-serif text-gold mb-8 text-center">Islamic Classes</h1>
      <div className="flex justify-center border-b border-gold/50 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-gold text-gold'
                : 'text-ivory/70 hover:text-gold'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'men' && (
          <div className="space-y-4">
            {mockMensClasses.map(c => (
              <div key={c.id} className="bg-navy/50 p-4 rounded-lg">
                <h3 className="text-xl font-serif text-gold">{c.title}</h3>
                <p className="text-ivory">{c.time}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'women' && (
          <div className="space-y-4">
            {mockWomensClasses.map(c => (
              <div key={c.id} className="bg-navy/50 p-4 rounded-lg">
                <h3 className="text-xl font-serif text-gold">{c.title}</h3>
                <p className="text-ivory">{c.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassesPage;
