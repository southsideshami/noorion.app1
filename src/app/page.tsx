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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard title="Quran Audio" description="Listen to the Holy Quran" component={<Quran />} />
        <FeatureCard title="Prayer Times" description="View daily prayer times" component={<PrayerTimes />} />
        <FeatureCard title="Qibla Direction" description="Find the direction of the Kaaba" component={<Qibla />} />
        <FeatureCard title="Social Feed" description="Connect with the community" component={<SocialFeed />} />
        <FeatureCard title="Private Chat" description="Secure and private messaging" component={<Chat />} />
        <FeatureCard title="Islamic Classes" description="Gender-separated learning" component={<Classes />} />
      </section>
    </main>
  );
}

const FeatureCard = ({ title, description, component }: { title: string, description: string, component: React.ReactNode }) => (
  <div className="bg-dark/50 rounded-lg shadow-lg p-6 hover:shadow-gold/20 transition-shadow duration-300">
    <h3 className="text-2xl font-serif text-gold mb-2">{title}</h3>
    <div className="text-ivory">{component}</div>
  </div>
);
