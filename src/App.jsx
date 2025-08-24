// App.jsx
import React from "react";
import Header from "./components/Header";
import KeyBenefits from "./components/KeyBenefits";
import InfoSection from "./components/InfoSection";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <KeyBenefits />
      <InfoSection />
      <FAQ />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default App;
