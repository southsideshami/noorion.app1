import AudioPlayer from '@/components/AudioPlayer';
import React from 'react';

const QuranPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-serif text-gold mb-8 text-center">Quran Audio Player</h1>
      <AudioPlayer />
    </div>
  );
};

export default QuranPage;
