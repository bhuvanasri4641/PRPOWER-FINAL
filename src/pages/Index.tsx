import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";

const ServicesOverview = lazy(() => import("@/components/ServicesOverview"));
const AboutPreview = lazy(() => import("@/components/AboutPreview"));
const ClientsSection = lazy(() => import("@/components/ClientsSection"));
const ContactPreview = lazy(() => import("@/components/ContactPreview"));

const sectionFallback = <div className="h-24 w-full" aria-hidden />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <Suspense fallback={sectionFallback}>
          <AboutPreview />
        </Suspense>
      </section>

      <section id="services">
        <Suspense fallback={sectionFallback}>
          <ServicesOverview />
        </Suspense>
      </section>

      <section id="clients">
        <Suspense fallback={sectionFallback}>
          <ClientsSection />
        </Suspense>
      </section>

      <section id="contact">
        <Suspense fallback={sectionFallback}>
          <ContactPreview />
        </Suspense>
      </section>
    </div>
  );
};

export default Index;
