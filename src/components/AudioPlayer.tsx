"use client";

import React, { useState, useRef, useEffect } from 'react';

// Mock data for Surahs. In a real app, this would come from an API.
const surahs = Array.from({ length: 114 }, (_, i) => ({
  id: i + 1,
  name: `Surah ${i + 1}`,
}));

const AudioPlayer = () => {
  const [selectedSurah, setSelectedSurah] = useState(surahs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioSrc = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${selectedSurah.id}.mp3`;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [selectedSurah, audioSrc, isPlaying]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-dark/50 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="surah-select" className="block text-sm font-medium text-ivory mb-2">
          Choose a Surah
        </label>
        <select
          id="surah-select"
          value={selectedSurah.id}
          onChange={(e) => {
            const surah = surahs.find(s => s.id === parseInt(e.target.value));
            if (surah) setSelectedSurah(surah);
          }}
          className="w-full p-2 rounded-md bg-dark text-light border border-gold"
        >
          {surahs.map((surah) => (
            <option key={surah.id} value={surah.id}>
              {surah.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <audio ref={audioRef} />
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 rounded-full bg-gold text-dark font-bold hover:bg-gold/80"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer; 