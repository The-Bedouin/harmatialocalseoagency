import Hero from "@/components/Hero";
import TopNav from "@/components/TopNav";
import FloatingBadges from "@/components/FloatingBadges";
import Projects from "@/components/Projects";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <Hero />
      <Projects />
      <Mission />
      <Services />
      <Testimonials />
      <CallToAction />
      <FrequentlyAskedQuestions />
      <FloatingBadges />
      <Footer />
    </div>
  );
}
