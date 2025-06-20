"use client";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { Clock } from 'lucide-react';
import QiblaCompass from '@/components/QiblaCompass';

const prayerTimes = [
  { name: 'Fajr', time: '05:30', next: false },
  { name: 'Dhuhr', time: '12:15', next: true },
  { name: 'Asr', time: '15:45', next: false },
  { name: 'Maghrib', time: '18:20', next: false },
  { name: 'Isha', time: '19:45', next: false }
];

export default function HomePage() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialSignIn = async (provider: 'apple' | 'google') => {
    setIsLoading(true);
    // TODO: Implement social sign-in
    console.log(`Signing in with ${provider}`);
    setTimeout(() => setIsLoading(false), 2000);
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy to-dark-navy">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy via-navy to-dark-navy p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-serif text-gold mb-4">Noorion</h1>
            <p className="text-xl text-ivory/80">Modern Islamic Social Platform</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Login/Register Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
              <h2 className="text-2xl font-serif text-gold mb-6 text-center">Welcome</h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => window.location.href = '/auth'}
                  className="w-full py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Login / Register
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-ivory/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-transparent text-ivory/60">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSocialSignIn('apple')}
                    disabled={isLoading}
                    className="flex items-center justify-center px-4 py-3 border border-ivory/20 rounded-lg text-ivory hover:bg-white/10 transition-colors disabled:opacity-50"
                  >
                    <FaApple className="mr-2" />
                    Apple
                  </button>
                  <button
                    onClick={() => handleSocialSignIn('google')}
                    disabled={isLoading}
                    className="flex items-center justify-center px-4 py-3 border border-ivory/20 rounded-lg text-ivory hover:bg-white/10 transition-colors disabled:opacity-50"
                  >
                    <FaGoogle className="mr-2" />
                    Google
                  </button>
                </div>
              </div>
            </div>

            {/* Qibla Compass */}
            <div>
              <QiblaCompass />
            </div>
          </div>

          {/* Next Prayer Time */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-gold" />
              <h3 className="text-xl font-serif text-gold">Next Prayer</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {prayerTimes.map((prayer) => (
                <div
                  key={prayer.name}
                  className={`text-center p-4 rounded-lg transition-colors ${
                    prayer.next
                      ? 'bg-gold/20 border border-gold/40'
                      : 'bg-white/5 border border-ivory/10'
                  }`}
                >
                  <div className={`font-serif text-lg ${
                    prayer.next ? 'text-gold' : 'text-ivory'
                  }`}>
                    {prayer.name}
                  </div>
                  <div className={`text-sm ${
                    prayer.next ? 'text-gold/80' : 'text-ivory/60'
                  }`}>
                    {prayer.time}
                  </div>
                  {prayer.next && (
                    <div className="text-xs text-gold/60 mt-1">Next</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated user view
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy to-dark-navy p-4">
      <div className="max-w-4xl mx-auto">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-gold mb-2">Welcome back, {session.user?.name}</h1>
          <p className="text-ivory/80">May your day be filled with blessings</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Qibla Compass */}
          <div>
            <QiblaCompass />
          </div>

          {/* Quick Actions */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
            <h3 className="text-xl font-serif text-gold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                View Prayer Times
              </button>
              <button className="w-full py-3 bg-white/10 text-ivory font-semibold rounded-lg hover:bg-white/20 transition-colors border border-ivory/20">
                Join a Class
              </button>
              <button className="w-full py-3 bg-white/10 text-ivory font-semibold rounded-lg hover:bg-white/20 transition-colors border border-ivory/20">
                Open Chat
              </button>
            </div>
          </div>
        </div>

        {/* Next Prayer Time */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-gold" />
            <h3 className="text-xl font-serif text-gold">Next Prayer</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {prayerTimes.map((prayer) => (
              <div
                key={prayer.name}
                className={`text-center p-4 rounded-lg transition-colors ${
                  prayer.next
                    ? 'bg-gold/20 border border-gold/40'
                    : 'bg-white/5 border border-ivory/10'
                }`}
              >
                <div className={`font-serif text-lg ${
                  prayer.next ? 'text-gold' : 'text-ivory'
                }`}>
                  {prayer.name}
                </div>
                <div className={`text-sm ${
                  prayer.next ? 'text-gold/80' : 'text-ivory/60'
                }`}>
                  {prayer.time}
                </div>
                {prayer.next && (
                  <div className="text-xs text-gold/60 mt-1">Next</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

