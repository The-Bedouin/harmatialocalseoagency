import Hero from "@/components/Hero";
import TopNav from "@/components/TopNav";
import FloatingBadges from "@/components/FloatingBadges";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <Hero />
      <FloatingBadges />
    </div>
  );
}
