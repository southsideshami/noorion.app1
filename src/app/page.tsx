"use client";
import React, { useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { Compass, Clock } from 'lucide-react';

const prayerTimes = [
  { name: "Fajr", time: "04:30" },
  { name: "Dhuhr", time: "13:15" },
  { name: "Asr", time: "16:45" },
  { name: "Maghrib", time: "19:30" },
  { name: "Isha", time: "21:00" },
];

const nextPrayer = prayerTimes[1]; // Mock: Dhuhr
const timeUntilNext = "2h 15m"; // Mock

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [direction] = useState(120); // Mock Qibla direction

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-navy text-ivory">
      <div className="w-full max-w-md bg-navy/80 p-8 rounded-xl shadow-lg mb-8">
        <h1 className="text-3xl font-serif text-gold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h1>
        <form className="space-y-4">
          {!isLogin && (
            <>
              <div className="flex space-x-2">
                <input type="text" placeholder="First Name" className="w-1/2 p-3 rounded-md bg-navy text-ivory border border-gold" />
                <input type="text" placeholder="Surname" className="w-1/2 p-3 rounded-md bg-navy text-ivory border border-gold" />
              </div>
              <input type="text" placeholder="Username" className="w-full p-3 rounded-md bg-navy text-ivory border border-gold" />
              <input type="text" placeholder="Contact Number" className="w-full p-3 rounded-md bg-navy text-ivory border border-gold" />
            </>
          )}
          <input type="email" placeholder="Email Address" className="w-full p-3 rounded-md bg-navy text-ivory border border-gold" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded-md bg-navy text-ivory border border-gold" />
          <button type="submit" className="w-full p-3 rounded-md bg-gold text-navy font-bold hover:bg-gold/80">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-ivory/20" />
          <span className="mx-2 text-ivory/60 text-sm">or</span>
          <div className="flex-grow h-px bg-ivory/20" />
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 flex items-center justify-center p-3 rounded-md bg-ivory text-navy font-bold hover:bg-ivory/90 transition-colors">
            <FaApple className="mr-2" /> Sign up with Apple
          </button>
          <button className="flex-1 flex items-center justify-center p-3 rounded-md bg-ivory text-navy font-bold hover:bg-ivory/90 transition-colors">
            <FaGoogle className="mr-2" /> Sign up with Gmail
          </button>
        </div>
        <p className="text-center mt-4 text-ivory">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="text-gold font-bold ml-2">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>

      {/* Qibla Compass and Next Prayer */}
      <div className="w-full max-w-md bg-navy/80 p-8 rounded-xl shadow-lg flex flex-col items-center">
        <h2 className="text-xl font-serif text-gold mb-4 flex items-center gap-2">
          <Compass className="h-6 w-6 text-gold" /> Qibla Direction
        </h2>
        <div className="relative w-40 h-40 mb-6">
          <div className="w-full h-full rounded-full bg-ivory/10 flex items-center justify-center">
            <div
              className="absolute w-2 h-20 bg-gold rounded-full origin-bottom"
              style={{ transform: `rotate(${direction}deg)` }}
            ></div>
            <div className="absolute w-4 h-4 rounded-full bg-gold top-0"></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-serif text-gold mb-2 flex items-center gap-2">
            <Clock className="h-5 w-5 text-gold" /> Next Prayer
          </h3>
          <div className="text-ivory text-2xl font-bold mb-1">{nextPrayer.name}</div>
          <div className="text-gold text-lg">{nextPrayer.time} <span className="text-ivory/70 text-base">({timeUntilNext})</span></div>
        </div>
      </div>
    </div>
  );
}

