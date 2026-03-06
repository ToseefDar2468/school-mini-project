import { getNotifications } from "@/lib/notifications";
import { getFaculty } from "@/lib/faculty";
import { TopAnnouncementBar } from "@/components/layout/TopAnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { NotificationSection } from "@/components/sections/NotificationSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FacultySection } from "@/components/sections/FacultySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default async function Home() {
  const notifications = await getNotifications();
  const faculty = await getFaculty();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopAnnouncementBar notifications={notifications} />
      <Navbar />
      <main>
        <HeroSection />
        <NotificationSection notifications={notifications} />
        <AboutSection />
        <FacultySection faculty={faculty} />
        <ServicesSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
