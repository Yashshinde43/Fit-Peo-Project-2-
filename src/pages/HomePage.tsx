import React from 'react';
import Home from "../components/Home";
import DesignDeclaresHero from "../components/DesignDeclaresHero";
import DonationSection from "../components/DonationSection";
import ActsOfEmergency from "../components/ActsOfEmergency";
import LatestSection from "../components/LatestSection";
import NewsletterToolkitSection from "../components/NewsletterToolkitSection";
import SignatoriesSection from "../components/SignatoriesSection";
import GlobalSupportersSection from "../components/GlobalSupportersSection";
import Footer from "../components/Footer";
import DeclareEmergency from "../components/DeclareEmergency";

const HomePage = () => {
  return (
    <>
      <div >
        <DesignDeclaresHero />
        <DonationSection /> 
        <Home /> 
        <ActsOfEmergency />
        <div id="declare-emergency">
          <DeclareEmergency />
        </div>
      </div>
      <div id="latest">
        <LatestSection />
      </div>
      <NewsletterToolkitSection />
      <SignatoriesSection />
      <GlobalSupportersSection />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;