import Quran from "@/features/quran";
import PrayerTimes from "@/features/prayer-times";
import Qibla from "@/features/qibla";
import SocialFeed from "@/features/social-feed";
import Chat from "@/features/chat";
import Classes from "@/features/classes";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 rounded-lg bg-gradient-to-br from-dark to-dark/90">
        <h1 className="text-5xl font-bold font-serif text-gold mb-4">
          Welcome to Noorion
        </h1>
        <p className="text-xl text-ivory max-w-2xl mx-auto">
          Your modern Islamic social app for spiritual growth and community connection.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard title="Quran Audio" description="Listen to the Holy Quran" component={<Quran />} />
        <FeatureCard title="Prayer Times" description="View daily prayer times" component={<PrayerTimes />} />
        <FeatureCard title="Qibla Direction" description="Find the direction of the Kaaba" component={<Qibla />} />
        <FeatureCard title="Social Feed" description="Connect with the community" component={<SocialFeed />} />
        <FeatureCard title="Private Chat" description="Secure and private messaging" component={<Chat />} />
        <FeatureCard title="Islamic Classes" description="Gender-separated learning" component={<Classes />} />
      </section>
    </div>
  );
}

const FeatureCard = ({ title, description, component }: { title: string, description: string, component: React.ReactNode }) => (
  <div className="bg-dark/50 rounded-lg shadow-lg p-6 hover:shadow-gold/20 transition-shadow duration-300">
    <h3 className="text-2xl font-serif text-gold mb-2">{title}</h3>
    <div className="text-ivory">{component}</div>
  </div>
);
