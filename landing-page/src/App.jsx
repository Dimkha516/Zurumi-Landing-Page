import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import WaitlistForm from "./components/WaitlistForm";
import HeroSection from "./components/HeroSection";
import CryptoSlider from "./components/CryptoSlider";
import AdvantagesSection from "./components/AdvantagesSection";
import OurSolution from "./components/OurSolution";
import CreateYourPortfolio from "./components/CreateYourPortfolio";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Questions from "./components/Questions";

function App() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <NavBar />
      <HeroSection />
      <CryptoSlider />
      <AdvantagesSection />
      <OurSolution />
      <CreateYourPortfolio />
      <Questions />
      <WaitlistForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
