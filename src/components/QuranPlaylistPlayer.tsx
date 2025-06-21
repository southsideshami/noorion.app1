"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown, BookOpen, Play, Pause } from "lucide-react";

// Complete list of all 114 surahs with Arabic names, English translations, and page numbers
const surahs = [
  { number: 1, name: "Al-Fatiha", arabic: "الفاتحة", translation: "The Opening", pages: "1", revelation: "Meccan" },
  { number: 2, name: "Al-Baqarah", arabic: "البقرة", translation: "The Cow", pages: "2-49", revelation: "Medinan" },
  { number: 3, name: "Al-Imran", arabic: "آل عمران", translation: "The Family of Imran", pages: "50-76", revelation: "Medinan" },
  { number: 4, name: "An-Nisa", arabic: "النساء", translation: "The Women", pages: "77-106", revelation: "Medinan" },
  { number: 5, name: "Al-Ma'idah", arabic: "المائدة", translation: "The Table Spread", pages: "106-128", revelation: "Medinan" },
  { number: 6, name: "Al-An'am", arabic: "الأنعام", translation: "The Cattle", pages: "128-150", revelation: "Meccan" },
  { number: 7, name: "Al-A'raf", arabic: "الأعراف", translation: "The Heights", pages: "150-176", revelation: "Meccan" },
  { number: 8, name: "Al-Anfal", arabic: "الأنفال", translation: "The Spoils of War", pages: "176-187", revelation: "Medinan" },
  { number: 9, name: "At-Tawbah", arabic: "التوبة", translation: "The Repentance", pages: "187-208", revelation: "Medinan" },
  { number: 10, name: "Yunus", arabic: "يونس", translation: "Jonah", pages: "208-221", revelation: "Meccan" },
  { number: 11, name: "Hud", arabic: "هود", translation: "Hud", pages: "221-235", revelation: "Meccan" },
  { number: 12, name: "Yusuf", arabic: "يوسف", translation: "Joseph", pages: "235-248", revelation: "Meccan" },
  { number: 13, name: "Ar-Ra'd", arabic: "الرعد", translation: "The Thunder", pages: "248-255", revelation: "Medinan" },
  { number: 14, name: "Ibrahim", arabic: "إبراهيم", translation: "Abraham", pages: "255-262", revelation: "Meccan" },
  { number: 15, name: "Al-Hijr", arabic: "الحجر", translation: "The Rocky Tract", pages: "262-267", revelation: "Meccan" },
  { number: 16, name: "An-Nahl", arabic: "النحل", translation: "The Bee", pages: "267-281", revelation: "Meccan" },
  { number: 17, name: "Al-Isra", arabic: "الإسراء", translation: "The Night Journey", pages: "281-293", revelation: "Meccan" },
  { number: 18, name: "Al-Kahf", arabic: "الكهف", translation: "The Cave", pages: "293-309", revelation: "Meccan" },
  { number: 19, name: "Maryam", arabic: "مريم", translation: "Mary", pages: "309-315", revelation: "Meccan" },
  { number: 20, name: "Ta-Ha", arabic: "طه", translation: "Ta-Ha", pages: "315-325", revelation: "Meccan" },
  { number: 21, name: "Al-Anbya", arabic: "الأنبياء", translation: "The Prophets", pages: "325-334", revelation: "Meccan" },
  { number: 22, name: "Al-Hajj", arabic: "الحج", translation: "The Pilgrimage", pages: "334-341", revelation: "Medinan" },
  { number: 23, name: "Al-Mu'minun", arabic: "المؤمنون", translation: "The Believers", pages: "341-348", revelation: "Meccan" },
  { number: 24, name: "An-Nur", arabic: "النور", translation: "The Light", pages: "348-358", revelation: "Medinan" },
  { number: 25, name: "Al-Furqan", arabic: "الفرقان", translation: "The Criterion", pages: "358-366", revelation: "Meccan" },
  { number: 26, name: "Ash-Shu'ara", arabic: "الشعراء", translation: "The Poets", pages: "366-377", revelation: "Meccan" },
  { number: 27, name: "An-Naml", arabic: "النمل", translation: "The Ant", pages: "377-385", revelation: "Meccan" },
  { number: 28, name: "Al-Qasas", arabic: "القصص", translation: "The Stories", pages: "385-396", revelation: "Meccan" },
  { number: 29, name: "Al-Ankabut", arabic: "العنكبوت", translation: "The Spider", pages: "396-404", revelation: "Meccan" },
  { number: 30, name: "Ar-Rum", arabic: "الروم", translation: "The Romans", pages: "404-410", revelation: "Meccan" },
  { number: 31, name: "Luqman", arabic: "لقمان", translation: "Luqman", pages: "410-414", revelation: "Meccan" },
  { number: 32, name: "As-Sajdah", arabic: "السجدة", translation: "The Prostration", pages: "414-417", revelation: "Meccan" },
  { number: 33, name: "Al-Ahzab", arabic: "الأحزاب", translation: "The Combined Forces", pages: "417-427", revelation: "Medinan" },
  { number: 34, name: "Saba", arabic: "سبإ", translation: "Sheba", pages: "427-434", revelation: "Meccan" },
  { number: 35, name: "Fatir", arabic: "فاطر", translation: "Originator", pages: "434-440", revelation: "Meccan" },
  { number: 36, name: "Ya-Sin", arabic: "يس", translation: "Ya-Sin", pages: "440-445", revelation: "Meccan" },
  { number: 37, name: "As-Saffat", arabic: "الصافات", translation: "Those who set the Ranks", pages: "445-452", revelation: "Meccan" },
  { number: 38, name: "Sad", arabic: "ص", translation: "The Letter Saad", pages: "452-458", revelation: "Meccan" },
  { number: 39, name: "Az-Zumar", arabic: "الزمر", translation: "The Troops", pages: "458-467", revelation: "Meccan" },
  { number: 40, name: "Ghafir", arabic: "غافر", translation: "The Forgiver", pages: "467-477", revelation: "Meccan" },
  { number: 41, name: "Fussilat", arabic: "فصلت", translation: "Explained in Detail", pages: "477-483", revelation: "Meccan" },
  { number: 42, name: "Ash-Shura", arabic: "الشورى", translation: "The Consultation", pages: "483-489", revelation: "Meccan" },
  { number: 43, name: "Az-Zukhruf", arabic: "الزخرف", translation: "The Ornaments of Gold", pages: "489-496", revelation: "Meccan" },
  { number: 44, name: "Ad-Dukhan", arabic: "الدخان", translation: "The Smoke", pages: "496-499", revelation: "Meccan" },
  { number: 45, name: "Al-Jathiyah", arabic: "الجاثية", translation: "The Kneeling", pages: "499-502", revelation: "Meccan" },
  { number: 46, name: "Al-Ahqaf", arabic: "الأحقاف", translation: "The Wind-Curved Sandhills", pages: "502-507", revelation: "Meccan" },
  { number: 47, name: "Muhammad", arabic: "محمد", translation: "Muhammad", pages: "507-510", revelation: "Medinan" },
  { number: 48, name: "Al-Fath", arabic: "الفتح", translation: "The Victory", pages: "510-515", revelation: "Medinan" },
  { number: 49, name: "Al-Hujurat", arabic: "الحجرات", translation: "The Private Apartments", pages: "515-517", revelation: "Medinan" },
  { number: 50, name: "Qaf", arabic: "ق", translation: "The Letter Qaf", pages: "517-520", revelation: "Meccan" },
  { number: 51, name: "Adh-Dhariyat", arabic: "الذاريات", translation: "The Winnowing Winds", pages: "520-523", revelation: "Meccan" },
  { number: 52, name: "At-Tur", arabic: "الطور", translation: "The Mount", pages: "523-525", revelation: "Meccan" },
  { number: 53, name: "An-Najm", arabic: "النجم", translation: "The Star", pages: "525-527", revelation: "Meccan" },
  { number: 54, name: "Al-Qamar", arabic: "القمر", translation: "The Moon", pages: "527-529", revelation: "Meccan" },
  { number: 55, name: "Ar-Rahman", arabic: "الرحمن", translation: "The Beneficent", pages: "529-531", revelation: "Medinan" },
  { number: 56, name: "Al-Waqi'ah", arabic: "الواقعة", translation: "The Inevitable", pages: "531-534", revelation: "Meccan" },
  { number: 57, name: "Al-Hadid", arabic: "الحديد", translation: "The Iron", pages: "534-537", revelation: "Medinan" },
  { number: 58, name: "Al-Mujadila", arabic: "المجادلة", translation: "The Pleading Woman", pages: "537-542", revelation: "Medinan" },
  { number: 59, name: "Al-Hashr", arabic: "الحشر", translation: "The Exile", pages: "542-545", revelation: "Medinan" },
  { number: 60, name: "Al-Mumtahanah", arabic: "الممتحنة", translation: "The Woman to be Examined", pages: "545-548", revelation: "Medinan" },
  { number: 61, name: "As-Saf", arabic: "الصف", translation: "The Ranks", pages: "548-549", revelation: "Medinan" },
  { number: 62, name: "Al-Jumu'ah", arabic: "الجمعة", translation: "The Congregation", pages: "549-550", revelation: "Medinan" },
  { number: 63, name: "Al-Munafiqun", arabic: "المنافقون", translation: "The Hypocrites", pages: "550-551", revelation: "Medinan" },
  { number: 64, name: "At-Taghabun", arabic: "التغابن", translation: "The Mutual Disillusion", pages: "551-552", revelation: "Medinan" },
  { number: 65, name: "At-Talaq", arabic: "الطلاق", translation: "Divorce", pages: "552-553", revelation: "Medinan" },
  { number: 66, name: "At-Tahrim", arabic: "التحريم", translation: "The Prohibition", pages: "553-554", revelation: "Medinan" },
  { number: 67, name: "Al-Mulk", arabic: "الملك", translation: "The Sovereignty", pages: "554-556", revelation: "Meccan" },
  { number: 68, name: "Al-Qalam", arabic: "القلم", translation: "The Pen", pages: "556-557", revelation: "Meccan" },
  { number: 69, name: "Al-Haqqah", arabic: "الحاقة", translation: "The Reality", pages: "557-558", revelation: "Meccan" },
  { number: 70, name: "Al-Ma'arij", arabic: "المعارج", translation: "The Ascending Stairways", pages: "558-559", revelation: "Meccan" },
  { number: 71, name: "Nuh", arabic: "نوح", translation: "Noah", pages: "559-561", revelation: "Meccan" },
  { number: 72, name: "Al-Jinn", arabic: "الجن", translation: "The Jinn", pages: "561-562", revelation: "Meccan" },
  { number: 73, name: "Al-Muzzammil", arabic: "المزمل", translation: "The Enshrouded One", pages: "562-564", revelation: "Meccan" },
  { number: 74, name: "Al-Muddathir", arabic: "المدثر", translation: "The Cloaked One", pages: "564-565", revelation: "Meccan" },
  { number: 75, name: "Al-Qiyamah", arabic: "القيامة", translation: "The Resurrection", pages: "565-566", revelation: "Meccan" },
  { number: 76, name: "Al-Insan", arabic: "الإنسان", translation: "Man", pages: "566-567", revelation: "Medinan" },
  { number: 77, name: "Al-Mursalat", arabic: "المرسلات", translation: "The Emissaries", pages: "567-568", revelation: "Meccan" },
  { number: 78, name: "An-Naba", arabic: "النبإ", translation: "The Tidings", pages: "568-569", revelation: "Meccan" },
  { number: 79, name: "An-Nazi'at", arabic: "النازعات", translation: "Those who drag forth", pages: "569-570", revelation: "Meccan" },
  { number: 80, name: "Abasa", arabic: "عبس", translation: "He frowned", pages: "570-571", revelation: "Meccan" },
  { number: 81, name: "At-Takwir", arabic: "التكوير", translation: "The Overthrowing", pages: "571-572", revelation: "Meccan" },
  { number: 82, name: "Al-Infitar", arabic: "الإنفطار", translation: "The Cleaving", pages: "572", revelation: "Meccan" },
  { number: 83, name: "Al-Mutaffifin", arabic: "المطففين", translation: "The Defrauding", pages: "572-573", revelation: "Meccan" },
  { number: 84, name: "Al-Inshiqaq", arabic: "الإنشقاق", translation: "The Splitting Open", pages: "573-574", revelation: "Meccan" },
  { number: 85, name: "Al-Buruj", arabic: "البروج", translation: "The Mansions of the Stars", pages: "574-575", revelation: "Meccan" },
  { number: 86, name: "At-Tariq", arabic: "الطارق", translation: "The Morning Star", pages: "575", revelation: "Meccan" },
  { number: 87, name: "Al-A'la", arabic: "الأعلى", translation: "The Most High", pages: "575-576", revelation: "Meccan" },
  { number: 88, name: "Al-Ghashiyah", arabic: "الغاشية", translation: "The Overwhelming", pages: "576-577", revelation: "Meccan" },
  { number: 89, name: "Al-Fajr", arabic: "الفجر", translation: "The Dawn", pages: "577-578", revelation: "Meccan" },
  { number: 90, name: "Al-Balad", arabic: "البلد", translation: "The City", pages: "578", revelation: "Meccan" },
  { number: 91, name: "Ash-Shams", arabic: "الشمس", translation: "The Sun", pages: "578-579", revelation: "Meccan" },
  { number: 92, name: "Al-Layl", arabic: "الليل", translation: "The Night", pages: "579", revelation: "Meccan" },
  { number: 93, name: "Ad-Duha", arabic: "الضحى", translation: "The Morning Hours", pages: "579-580", revelation: "Meccan" },
  { number: 94, name: "Ash-Sharh", arabic: "الشرح", translation: "The Relief", pages: "580", revelation: "Meccan" },
  { number: 95, name: "At-Tin", arabic: "التين", translation: "The Fig", pages: "580", revelation: "Meccan" },
  { number: 96, name: "Al-Alaq", arabic: "العلق", translation: "The Clot", pages: "580-581", revelation: "Meccan" },
  { number: 97, name: "Al-Qadr", arabic: "القدر", translation: "The Power", pages: "581", revelation: "Meccan" },
  { number: 98, name: "Al-Bayyinah", arabic: "البينة", translation: "The Clear Proof", pages: "581-582", revelation: "Medinan" },
  { number: 99, name: "Az-Zalzalah", arabic: "الزلزلة", translation: "The Earthquake", pages: "582", revelation: "Medinan" },
  { number: 100, name: "Al-Adiyat", arabic: "العاديات", translation: "The Coursers", pages: "582-583", revelation: "Meccan" },
  { number: 101, name: "Al-Qari'ah", arabic: "القارعة", translation: "The Calamity", pages: "583", revelation: "Meccan" },
  { number: 102, name: "At-Takathur", arabic: "التكاثر", translation: "The Rivalry in world increase", pages: "583", revelation: "Meccan" },
  { number: 103, name: "Al-Asr", arabic: "العصر", translation: "The Declining Day", pages: "583", revelation: "Meccan" },
  { number: 104, name: "Al-Humazah", arabic: "الهمزة", translation: "The Traducer", pages: "583-584", revelation: "Meccan" },
  { number: 105, name: "Al-Fil", arabic: "الفيل", translation: "The Elephant", pages: "584", revelation: "Meccan" },
  { number: 106, name: "Quraish", arabic: "قريش", translation: "Quraish", pages: "584", revelation: "Meccan" },
  { number: 107, name: "Al-Ma'un", arabic: "الماعون", translation: "The Small kindnesses", pages: "584-585", revelation: "Meccan" },
  { number: 108, name: "Al-Kawthar", arabic: "الكوثر", translation: "The Abundance", pages: "585", revelation: "Meccan" },
  { number: 109, name: "Al-Kafirun", arabic: "الكافرون", translation: "The Disbelievers", pages: "585", revelation: "Meccan" },
  { number: 110, name: "An-Nasr", arabic: "النصر", translation: "The Divine Support", pages: "585-586", revelation: "Medinan" },
  { number: 111, name: "Al-Masad", arabic: "المسد", translation: "The Palm Fiber", pages: "586", revelation: "Meccan" },
  { number: 112, name: "Al-Ikhlas", arabic: "الإخلاص", translation: "The Sincerity", pages: "586", revelation: "Meccan" },
  { number: 113, name: "Al-Falaq", arabic: "الفلق", translation: "The Daybreak", pages: "586", revelation: "Meccan" },
  { number: 114, name: "An-Nas", arabic: "الناس", translation: "Mankind", pages: "586", revelation: "Meccan" }
];

const QuranPlaylistPlayer = () => {
  const [currentSurah, setCurrentSurah] = useState(surahs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showReading, setShowReading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = useCallback((surah: (typeof surahs)[0]) => {
    setCurrentSurah(surah);
    setIsPlaying(true);
    setIsDropdownOpen(false);
  }, []);

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

  const filteredSurahs = surahs.filter(surah =>
    surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.arabic.includes(searchTerm) ||
    surah.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.number.toString().includes(searchTerm)
  );

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentSurah, isPlaying]);

  const audioUrl = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${currentSurah.number}.mp3`;

  return (
    <div className="bg-[#2A2C41] text-white p-6 rounded-xl max-w-4xl mx-auto shadow-lg">
      <h1 className="text-3xl font-serif mb-6 text-center">📖 Qur&apos;an Playlist</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Surah Selection */}
        <div className="space-y-4">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between p-4 bg-[#3A3C51] rounded-lg border border-[#FDBF50]/20 hover:bg-[#4A4C61] transition-colors"
            >
              <span className="text-left">
                <div className="font-semibold">{currentSurah.number}. {currentSurah.name}</div>
                <div className="text-sm text-gray-300">{currentSurah.arabic} • {currentSurah.translation}</div>
              </span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#3A3C51] rounded-lg border border-[#FDBF50]/20 max-h-96 overflow-y-auto z-10">
                <div className="p-3 border-b border-[#FDBF50]/20">
                  <input
                    type="text"
                    placeholder="Search surahs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 bg-[#2A2C41] rounded border border-[#FDBF50]/20 text-white placeholder-gray-400"
                  />
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {filteredSurahs.map((surah) => (
                    <button
                      key={surah.number}
                      onClick={() => handlePlay(surah)}
                      className={`w-full text-left p-3 hover:bg-[#4A4C61] transition-colors border-b border-[#FDBF50]/10 ${
                        currentSurah.number === surah.number ? 'bg-[#FDBF50]/20' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{surah.number}. {surah.name}</div>
                          <div className="text-sm text-gray-300">{surah.arabic}</div>
                          <div className="text-xs text-gray-400">{surah.translation}</div>
                        </div>
                        <div className="text-right text-xs text-gray-400">
                          <div>Pages: {surah.pages}</div>
                          <div>{surah.revelation}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Audio Player */}
          <div className="bg-[#3A3C51] rounded-lg p-4 border border-[#FDBF50]/20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-lg">{currentSurah.name}</h3>
              <button
                onClick={togglePlayPause}
                className="p-2 bg-[#FDBF50] text-[#2A2C41] rounded-full hover:bg-[#FDBF50]/80 transition-colors"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
            </div>
            <audio
              ref={audioRef}
              src={audioUrl}
              className="w-full"
              onEnded={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support the audio element.
            </audio>
            <div className="mt-3 text-sm text-gray-300">
              <div>Pages: {currentSurah.pages}</div>
              <div>Revelation: {currentSurah.revelation}</div>
            </div>
          </div>

          {/* Reading Button */}
          <button
            onClick={() => setShowReading(!showReading)}
            className="w-full flex items-center justify-center gap-2 p-3 bg-[#8DA05E] text-white rounded-lg hover:bg-[#8DA05E]/80 transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            {showReading ? 'Hide Reading' : 'Show Reading'}
          </button>
        </div>

        {/* Reading Section */}
        {showReading && (
          <div className="bg-[#3A3C51] rounded-lg p-4 border border-[#FDBF50]/20">
            <h3 className="font-semibold text-lg mb-4 text-center">
              {currentSurah.arabic} - {currentSurah.name}
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-serif text-[#FDBF50] mb-2">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
                <div className="text-sm text-gray-300">In the name of Allah, the Entirely Merciful, the Especially Merciful</div>
              </div>
              <div className="bg-[#2A2C41] rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-2">Reading Preview</div>
                <div className="text-right text-lg leading-relaxed mb-3">
                  {/* This would be replaced with actual Quran text */}
                  <div className="text-[#FDBF50]">الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</div>
                </div>
                <div className="text-sm text-gray-300">
                  [All] praise is [due] to Allah, Lord of the worlds
                </div>
              </div>
              <div className="text-center">
                <a
                  href={`https://quran.com/${currentSurah.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDBF50] text-[#2A2C41] rounded-lg hover:bg-[#FDBF50]/80 transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  Read Full Surah
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuranPlaylistPlayer; 