import Footer from "@/components/Footer";
import FAQ from "@/components/Fragments/FAQ";
import HeroSection from "@/components/Fragments/HeroSection";
import PeopleSay from "@/components/Fragments/PeopleSay";
import Pricing from "@/components/Fragments/Pricing";
import Process from "@/components/Fragments/Process";
import Services from "@/components/Fragments/Services";
import TrustedBy from "@/components/Fragments/TrustedBy";
import Works from "@/components/Fragments/Works";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TrustedBy />
      <Process />
      <Services />
      <Pricing />
      <Works />
      <FAQ />
      <PeopleSay />
      <Footer />
    </main>
  );
}
