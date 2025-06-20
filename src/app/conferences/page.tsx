"use client";
import React from 'react';

const mockConferences = [
  { id: 1, title: "The Seerah Conference", speaker: "Dr. Yasir Qadhi", date: "2024-09-15", location: "Online" },
  { id: 2, title: "Reviving the Islamic Spirit", speaker: "Various", date: "2024-12-25", location: "Toronto, CA" },
  { id: 3, title: "Youth Conference on Faith", speaker: "Mufti Menk", date: "2025-01-20", location: "London, UK" },
];

const ConferencesPage = () => {
  const conferences = mockConferences;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-serif text-gold mb-8 text-center">Upcoming Conferences</h1>
      {/* Filter section placeholder */}
      <div className="mb-8 flex justify-center space-x-4">
        <input type="date" className="p-2 rounded-md bg-navy text-ivory border border-gold" />
        <select className="p-2 rounded-md bg-navy text-ivory border border-gold">
          <option>All Categories</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {conferences.map(conf => (
          <div key={conf.id} className="bg-navy/50 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-serif text-gold mb-2">{conf.title}</h2>
            <p className="text-ivory mb-1"><strong>Speaker:</strong> {conf.speaker}</p>
            <p className="text-ivory mb-1"><strong>Date:</strong> {conf.date}</p>
            <p className="text-ivory"><strong>Location:</strong> {conf.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferencesPage;
