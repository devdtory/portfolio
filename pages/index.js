import Footer from "@/components/Footer";
import FAQ from "@/components/Fragments/FAQ";
import HeroSection from "@/components/Fragments/HeroSection";
import PeopleSay from "@/components/Fragments/PeopleSay";
import Process from "@/components/Fragments/Process";
import Services from "@/components/Fragments/Services";
import TrustedBy from "@/components/Fragments/TrustedBy";
import Works from "@/components/Fragments/Works";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <TrustedBy />
      <Process />
      <div className="h-[180px] lg:h-[250px]"></div>
      <Services />
      <div className="h-[185px]"></div>
      <Works />
      <div className="h-[150px]"></div>
      <FAQ />
      <div className="h-[250px]"></div>
      <PeopleSay />

      <div className="h-[250px]"></div>
      <Footer />
    </main>
  );
}
