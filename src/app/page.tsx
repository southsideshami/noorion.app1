import { BookOpen, Clock, Compass, MessageCircle, Users, Bell } from 'lucide-react';

export default function Home() {
  return (
    <div className="root-container">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy to-olive text-ivory">
        <div className="max-w-4xl mx-auto px-6">
          <div className="logo mb-8">
            <div className="text-6xl font-serif mb-4">☪️</div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Noorion
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Your Modern Islamic Social Platform
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-ivory text-ivory px-8 py-4 rounded-lg font-semibold hover:bg-ivory hover:text-navy transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-navy text-center mb-16">
            Discover Our Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quran Audio */}
            <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">Quran Audio</h3>
                <p className="text-gray-600 mb-4">Listen to beautiful recitations of the Holy Quran with multiple reciters and translations.</p>
                <button className="bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300">
                  Explore
                </button>
              </div>
            </div>

            {/* Prayer Times */}
            <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-olive rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-ivory" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">Prayer Times</h3>
                <p className="text-gray-600 mb-4">Get accurate prayer times for your location with notifications and Qibla direction.</p>
                <button className="bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300">
                  View Times
                </button>
              </div>
            </div>

            {/* Qibla Direction */}
            <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">Qibla Direction</h3>
                <p className="text-gray-600 mb-4">Find the direction of the Kaaba with our accurate compass and GPS technology.</p>
                <button className="bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300">
                  Find Qibla
                </button>
              </div>
            </div>

            {/* Secure Chat */}
            <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-olive rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-ivory" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">Secure Chat</h3>
                <p className="text-gray-600 mb-4">Connect with fellow Muslims through our end-to-end encrypted messaging system.</p>
                <button className="bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300">
                  Start Chat
                </button>
              </div>
            </div>

            {/* Islamic Classes */}
            <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">Islamic Classes</h3>
                <p className="text-gray-600 mb-4">Join gender-separated classes to learn about Islam from qualified scholars.</p>
                <button className="bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300">
                  Join Class
                </button>
              </div>
            </div>

            {/* Daily Reminders */}
            <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-olive rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-ivory" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-navy mb-3">Daily Reminders</h3>
                <p className="text-gray-600 mb-4">Receive daily Islamic reminders, duas, and motivational content to strengthen your faith.</p>
                <button className="bg-navy text-ivory px-6 py-2 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-navy text-center mb-16">
            Connect with the Community
          </h2>
          <div className="card bg-ivory rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-semibold text-navy mb-4">Islamic Social Feed</h3>
              <p className="text-gray-600 mb-6">Share your Islamic journey, connect with fellow Muslims, and discover inspiring content from around the world.</p>
              <button className="bg-navy text-ivory px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all duration-300">
                Explore Feed
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-ivory py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="logo-spin mb-6">
            <div className="text-4xl">☪️</div>
          </div>
          <p className="text-lg mb-4">Noorion - Your Modern Islamic Social Platform</p>
          <p className="read-the-docs text-sm opacity-75">
            Building bridges of faith in the digital age
          </p>
        </div>
      </footer>
    </div>
  );
}

