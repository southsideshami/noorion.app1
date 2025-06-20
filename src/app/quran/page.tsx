"use client";
import React from 'react';
import AudioPlayer from '@/components/AudioPlayer';

const QuranPage = () => {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-gold mb-4">Quran Audio</h1>
        <p className="text-ivory/70">Listen to beautiful recitations of the Holy Quran</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Audio Player */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <h2 className="text-2xl font-serif font-semibold text-gold mb-6">Audio Player</h2>
          <AudioPlayer />
        </div>

        {/* Reciters */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <h2 className="text-2xl font-serif font-semibold text-gold mb-6">Popular Reciters</h2>
          <div className="space-y-4">
            {[
              { name: "Sheikh Abdul Rahman Al-Sudais", country: "Saudi Arabia" },
              { name: "Sheikh Saad Al-Ghamdi", country: "Saudi Arabia" },
              { name: "Sheikh Mishary Rashid Alafasy", country: "Kuwait" },
              { name: "Sheikh Maher Al-Mueaqly", country: "Saudi Arabia" },
              { name: "Sheikh Ahmed Al-Ajmi", country: "Saudi Arabia" },
            ].map((reciter, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gold/10 rounded-lg">
                <div>
                  <p className="text-ivory font-medium">{reciter.name}</p>
                  <p className="text-ivory/60 text-sm">{reciter.country}</p>
                </div>
                <button className="px-4 py-2 bg-gold text-navy rounded-lg hover:bg-gold/80 transition-colors">
                  Play
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Surahs */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <h2 className="text-2xl font-serif font-semibold text-gold mb-6">Recently Played</h2>
          <div className="space-y-3">
            {[
              { name: "Surah Al-Fatiha", number: 1, reciter: "Al-Sudais" },
              { name: "Surah Al-Baqarah", number: 2, reciter: "Al-Ghamdi" },
              { name: "Surah Al-Imran", number: 3, reciter: "Alafasy" },
              { name: "Surah An-Nisa", number: 4, reciter: "Al-Mueaqly" },
            ].map((surah, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gold/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gold text-navy rounded-full flex items-center justify-center text-sm font-bold">
                    {surah.number}
                  </div>
                  <div>
                    <p className="text-ivory font-medium">{surah.name}</p>
                    <p className="text-ivory/60 text-sm">{surah.reciter}</p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-gold text-navy rounded text-sm hover:bg-gold/80 transition-colors">
                  Play
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Translations */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <h2 className="text-2xl font-serif font-semibold text-gold mb-6">Translations</h2>
          <div className="space-y-3">
            {[
              { language: "English", translator: "Sahih International" },
              { language: "Urdu", translator: "Fateh Muhammad Jalandhri" },
              { language: "French", translator: "Muhammad Hamidullah" },
              { language: "Spanish", translator: "Julio Cortés" },
              { language: "German", translator: "Abu Rida Muhammad ibn Ahmad ibn Rassoul" },
            ].map((translation, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gold/10 rounded-lg">
                <div>
                  <p className="text-ivory font-medium">{translation.language}</p>
                  <p className="text-ivory/60 text-sm">{translation.translator}</p>
                </div>
                <button className="px-3 py-1 bg-olive text-ivory rounded text-sm hover:bg-olive/80 transition-colors">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranPage;
