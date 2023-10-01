import React from "react";
import AppHero from "../component/home/hero";
import AppAbout from "../component/home/About";
import AppFeature from "../component/home/feature";
import AppWorks from "../component/home/works";
import AppFaq from "../component/home/Faq";
import AppPricing from "../component/home/pricing";
import AppContact from "../component/home/Contact";

function AppHome() {
  return (
    <div id="home" className="main">
      <AppHero />
      <AppAbout />
      <AppFeature />
      <AppWorks />
      <AppFaq />
      <AppPricing />
      <AppContact />
    </div>
  );
}

export default AppHome;
