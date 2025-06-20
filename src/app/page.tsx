import { BookOpen, Clock, Compass, MessageCircle, Bell } from 'lucide-react';

export default function Home() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const prayerTimes = {
    Fajr: "04:30",
    Dhuhr: "13:15",
    Asr: "16:45",
    Maghrib: "19:30",
    Isha: "21:00",
  };

  const nextPrayer = "Dhuhr";
  const timeUntilNext = "2h 15m";

  return (
    <div className="p-6 lg:p-8">
      {/* Hero Section */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-navy via-navy to-olive rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">☪️</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
            Welcome to Noorion
          </h1>
          <p className="text-xl text-ivory/90 mb-6">
            Your Modern Islamic Social Platform
          </p>
          <p className="text-ivory/70">
            {formattedDate}
          </p>
        </div>
      </section>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Prayer Times Card */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-serif font-semibold text-gold">Prayer Times</h2>
            <Clock className="h-6 w-6 text-gold" />
          </div>
          <div className="space-y-3">
            {Object.entries(prayerTimes).map(([name, time]) => (
              <div key={name} className="flex justify-between items-center">
                <span className={`font-medium ${name === nextPrayer ? 'text-gold' : 'text-ivory'}`}>
                  {name}
                </span>
                <span className={`${name === nextPrayer ? 'text-gold font-bold' : 'text-ivory/70'}`}>
                  {time}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-gold/10 rounded-lg">
            <p className="text-sm text-gold">
              Next: {nextPrayer} in {timeUntilNext}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <h2 className="text-xl font-serif font-semibold text-gold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gold/10 text-ivory hover:bg-gold/20 transition-colors">
              <BookOpen className="h-5 w-5 text-gold" />
              <span>Listen to Quran</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gold/10 text-ivory hover:bg-gold/20 transition-colors">
              <Compass className="h-5 w-5 text-gold" />
              <span>Find Qibla</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gold/10 text-ivory hover:bg-gold/20 transition-colors">
              <MessageCircle className="h-5 w-5 text-gold" />
              <span>Open Chat</span>
            </button>
          </div>
        </div>

        {/* Daily Reminder */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-serif font-semibold text-gold">Daily Reminder</h2>
            <Bell className="h-6 w-6 text-gold" />
          </div>
          <blockquote className="text-ivory mb-4 italic">
            &ldquo;The best of you are those who are best to their families.&rdquo;
          </blockquote>
          <p className="text-sm text-olive font-medium">
            — Prophet Muhammad (ﷺ)
          </p>
        </div>

        {/* Recent Activity */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <h2 className="text-xl font-serif font-semibold text-gold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span className="text-ivory/70 text-sm">New class available: Fiqh of Salah</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-olive rounded-full"></div>
              <span className="text-ivory/70 text-sm">Conference reminder: Seerah Conference</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span className="text-ivory/70 text-sm">New message from Aisha</span>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <h2 className="text-xl font-serif font-semibold text-gold mb-4">Community</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-ivory">Online Users</span>
              <span className="text-gold font-bold">1,247</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ivory">Active Classes</span>
              <span className="text-gold font-bold">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ivory">Today&apos;s Posts</span>
              <span className="text-gold font-bold">89</span>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
          <h2 className="text-xl font-serif font-semibold text-gold mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gold/10 rounded-lg">
              <p className="text-sm font-medium text-gold">Seerah Conference</p>
              <p className="text-xs text-ivory/70">Tomorrow, 2:00 PM</p>
            </div>
            <div className="p-3 bg-olive/10 rounded-lg">
              <p className="text-sm font-medium text-olive">Arabic Class</p>
              <p className="text-xs text-ivory/70">Monday, 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

