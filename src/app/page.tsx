import { BookOpen, Clock, Compass, Users, MessageSquare, GraduationCap, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section with Islamic gradient pattern */}
      <section className="w-full py-32 text-center relative overflow-hidden">
        {/* Background gradient with Islamic pattern effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(253,191,80,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-gold mb-6 leading-tight">
            Welcome to Noorion
          </h1>
          <p className="text-lg md:text-xl text-ivory max-w-3xl mx-auto mb-12 leading-relaxed">
            This is a modern Islamic social app for reflection, connection, and simplicity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gold text-dark font-bold rounded-full hover:bg-gold/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Quran
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-bold rounded-full hover:bg-gold hover:text-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join the Community
            </button>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-dark/95">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-gold text-center mb-16">Discover Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpen size={48} className="text-olive" />}
              title="Quran Audio"
              description="Listen to the Holy Quran from world-renowned reciters with beautiful audio quality."
              link="/quran"
            />
            <FeatureCard
              icon={<Clock size={48} className="text-olive" />}
              title="Prayer Times"
              description="Stay on top of your daily prayers with accurate timings for your location."
              link="/qibla"
            />
            <FeatureCard
              icon={<Compass size={48} className="text-olive" />}
              title="Qibla Direction"
              description="Find the direction of the Kaaba from anywhere in the world with precision."
              link="/qibla"
            />
            <FeatureCard
              icon={<Users size={48} className="text-olive" />}
              title="Social Feed"
              description="Share reflections and connect with a righteous community of believers."
              link="/feed"
            />
            <FeatureCard
              icon={<MessageSquare size={48} className="text-olive" />}
              title="Chat"
              description="Engage in secure, private conversations with friends and family members."
              link="/chat"
            />
            <FeatureCard
              icon={<GraduationCap size={48} className="text-olive" />}
              title="Classes"
              description="Enroll in gender-separated classes on various Islamic topics and subjects."
              link="/classes"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const FeatureCard = ({ icon, title, description, link }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  link: string;
}) => (
  <div className="group bg-dark/50 p-8 rounded-xl text-center border border-ivory/10 hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10">
    <div className="flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold font-serif text-gold mb-4 group-hover:text-gold/80 transition-colors">
      {title}
    </h3>
    <p className="text-ivory mb-6 leading-relaxed">{description}</p>
    <a 
      href={link}
      className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 font-medium transition-colors group-hover:translate-x-1"
    >
      <span>Learn More</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  </div>
);
