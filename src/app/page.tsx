import Quran from "@/features/quran";
import PrayerTimes from "@/features/prayer-times";
import Qibla from "@/features/qibla";
import SocialFeed from "@/features/social-feed";
import Chat from "@/features/chat";
import Classes from "@/features/classes";

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl mb-4">Welcome to Noorion</h2>
      <p className="mb-8">
        This is the beginning of a modern Islamic social app. Explore the features as they are built.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Quran />
        <PrayerTimes />
        <Qibla />
        <SocialFeed />
        <Chat />
        <Classes />
      </div>
    </div>
  );
}
