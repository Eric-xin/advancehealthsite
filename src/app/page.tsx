import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Eligibility from "@/components/Eligibility";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Collaborators from "@/components/Collaborators";
// import PartnerSocieties from "@/components/PartnerSocieties";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Eligibility />
          <Collaborators />
          <About />
          <Tracks />
          <Schedule />
          <FAQ />
          <Register />
        </main>
        <Footer />
      </div>
    </>
  );
}
