import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWeb from "@/components/UpcomingWeb";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection/>
      <FeaturedCourses />
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWeb/>
      <Instructor/>
    </main>
  );
}
