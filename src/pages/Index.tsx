import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import EmptyTables from "@/components/landing/EmptyTables";
import ProfitCalculator from "@/components/landing/ProfitCalculator";
import WhatIs from "@/components/landing/WhatIs";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyInterested from "@/components/landing/WhyInterested";
import FitCheck from "@/components/landing/FitCheck";
import PilotDetails from "@/components/landing/PilotDetails";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhatIs />
        <HowItWorks />
        <WhyInterested />
        <FitCheck />
        <EmptyTables />
        <ProfitCalculator />
        <PilotDetails />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
