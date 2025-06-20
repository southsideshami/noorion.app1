"use client";
import { useEffect, useRef, useState } from "react";

const surahs = [
  { number: 1, name: "Al-Fatiha" },
  { number: 2, name: "Al-Baqarah" },
  { number: 3, name: "Al-Imran" },
  { number: 4, name: "An-Nisa" },
  { number: 5, name: "Al-Ma'idah" },
  { number: 6, name: "Al-An'am" },
  { number: 7, name: "Al-A'raf" },
  { number: 8, name: "Al-Anfal" },
  { number: 9, name: "At-Tawbah" },
  { number: 10, name: "Yunus" },
  // ➕ Add up to 114 surahs as needed
];

const QuranPlaylistPlayer = () => {
  const [currentSurah, setCurrentSurah] = useState(surahs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentSurah]);

  const handlePlay = (surah: (typeof surahs)[0]) => {
    setCurrentSurah(surah);
    setIsPlaying(true);
  };

  const audioUrl = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${currentSurah.number}.mp3`;

  return (
    <div className="bg-[#2A2C41] text-white p-6 rounded-xl max-w-3xl mx-auto shadow-lg">
      <h1 className="text-3xl font-serif mb-4">📖 Qur'an Playlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Playlist */}
        <div className="space-y-2 overflow-y-auto max-h-[400px] pr-2">
          {surahs.map((surah) => (
            <button
              key={surah.number}
              onClick={() => handlePlay(surah)}
              className={`w-full text-left px-4 py-2 rounded-md border 
                ${
                  currentSurah.number === surah.number
                    ? "bg-[#FDBF50] text-black font-semibold"
                    : "hover:bg-[#8DA05E] hover:text-white"
                }`}
            >
              {surah.number}. {surah.name}
            </button>
          ))}
        </div>

        {/* Player UI */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-semibold mb-2">{currentSurah.name}</p>
          <audio
            controls
            ref={audioRef}
            src={audioUrl}
            className="w-full"
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default QuranPlaylistPlayer; 