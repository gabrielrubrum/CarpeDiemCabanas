import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LocationSection from '@/components/LocationSection';
import ExperienceSection from '@/components/ExperienceSection';
import CabanasSection from '@/components/CabanasSection';
import BlogSection from '@/components/BlogSection';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="light" />
      <main className="flex-1">
        <Hero />
        <div className="bg-[#F6F3ED]">
          <LocationSection />
          <ExperienceSection />
          <CabanasSection />
          <BlogSection />
        </div>
        <FinalCTA />
        <div
          aria-hidden="true"
          className="h-10 md:h-14 lg:h-20 xl:h-24 bg-[#F6F3ED]"
        />
      </main>
      <Footer />
    </div>
  );
}
