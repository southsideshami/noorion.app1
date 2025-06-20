"use client";
import React, { useState, useEffect } from 'react';

const QiblaPage = () => {
  const [direction, setDirection] = useState(0);
  const prayerTimes = {
    Fajr: "04:30",
    Dhuhr: "13:15",
    Asr: "16:45",
    Maghrib: "19:30",
    Isha: "21:00",
  };

  // Mock location and Qibla calculation for now
  useEffect(() => {
    // In a real app, you would use navigator.geolocation
    // and a library to calculate the Qibla direction.
    setDirection(120); // Example direction
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-serif text-gold mb-8 text-center">Qibla & Prayer Times</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-dark/50 p-8 rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl font-serif text-ivory mb-4">Qibla Direction</h2>
          <div className="relative w-48 h-48">
            <div className="w-full h-full rounded-full bg-ivory/10 flex items-center justify-center">
              <div
                className="absolute w-2 h-24 bg-gold rounded-full origin-bottom"
                style={{ transform: `rotate(${direction}deg)` }}
              ></div>
              <div className="absolute w-4 h-4 rounded-full bg-gold top-0"></div>
            </div>
          </div>
        </div>
        <div className="bg-dark/50 p-8 rounded-lg">
          <h2 className="text-2xl font-serif text-ivory mb-4">Today&apos;s Prayer Times</h2>
          <ul className="space-y-2 text-lg">
            {Object.entries(prayerTimes).map(([name, time]) => (
              <li key={name} className="flex justify-between">
                <span className="font-bold text-gold">{name}</span>
                <span className="text-ivory">{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QiblaPage;
