import React, { useState } from "react";
import { services } from "./data/siteData";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

export default function App() {
  const [selectedService, setSelectedService] = useState(services[0].title);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-rose-50 text-black">
      <Navbar selectedService={selectedService} />

      <main>
        <Hero selectedService={selectedService} setSelectedService={setSelectedService} />
        <Services setSelectedService={setSelectedService} />
        <Gallery />
        <Testimonials />
        <Profile />
        <FAQ />
        <CTA selectedService={selectedService} />
      </main>

      <Footer />
    </div>
  );
}