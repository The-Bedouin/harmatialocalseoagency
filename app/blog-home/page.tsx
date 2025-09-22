import ODHeading from "@/components/ODHeading";
import BlogHeader from "@/components/BlogHeader";
import BlogCards from "@/components/BlogCards";
import StatementSection from "@/components/StatementSection";
import WhyHarmatiaSection from "@/components/WhyHarmatiaSection";
import NewsletterCard from "@/components/NewsletterCard";
import BlogFooter from "@/components/BlogFooter";
import BlogFeaturedSideCard from "@/components/BlogFeaturedSideCard";

export const metadata = {
  title: "Level Up Your Money Game - Investment Strategies Blog | Harmatia SEO",
  description: "Financial Freedom starts with just OneDollar. Practical tips to help you unlock actionable insights in making smarter financial decisions and building wealth.",
  keywords: "investment strategies, financial freedom, wealth building, money management, investment tips, financial planning",
};

export default function BlogHome() {
  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      <ODHeading />
      <BlogFeaturedSideCard />
      <StatementSection />
      <BlogCards />
      <WhyHarmatiaSection />
      <NewsletterCard />
      <BlogFooter />
    </div>
  );
}
