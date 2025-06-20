import Quran from "@/features/quran";
import PrayerTimes from "@/features/prayer-times";
import Qibla from "@/features/qibla";
import SocialFeed from "@/features/social-feed";
import Chat from "@/features/chat";
import Classes from "@/features/classes";

export default function Home() {
  return (
    <main>
      <section className="w-full py-32 bg-dark text-center bg-gradient-to-br from-dark to-gray-800">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-gold mb-4">
            Welcome to Noorion
          </h1>
          <p className="text-lg md:text-xl text-ivory max-w-3xl mx-auto mb-8">
            This is a modern Islamic social app for reflection, connection, and simplicity.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-gold text-dark font-bold rounded-full hover:bg-gold/80 transition-colors">
              Explore Quran
            </button>
            <button className="px-8 py-3 bg-transparent border border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-dark transition-colors">
              Join the Community
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="📖"
              title="Quran Audio"
              description="Listen to the Holy Quran from world-renowned reciters."
            />
            <FeatureCard
              icon="🕌"
              title="Prayer Times"
              description="Stay on top of your daily prayers with accurate timings."
            />
            <FeatureCard
              icon="🧭"
              title="Qibla Direction"
              description="Find the direction of the Kaaba from anywhere in the world."
            />
            <FeatureCard
              icon="✍️"
              title="Feed"
              description="Share reflections and connect with a righteous community."
            />
            <FeatureCard
              icon="💬"
              title="Chat"
              description="Engage in secure, private conversations with friends and family."
            />
            <FeatureCard
              icon="🎓"
              title="Classes"
              description="Enroll in gender-separated classes on various Islamic topics."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-dark/50 p-8 rounded-lg text-center border border-ivory/10 hover:border-gold transition-colors duration-300 transform hover:-translate-y-1">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold font-serif text-gold mb-2">{title}</h3>
    <p className="text-ivory">{description}</p>
  </div>
);
