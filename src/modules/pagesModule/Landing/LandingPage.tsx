import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";

const LandingPage = () => {
  return (
    <div className="column gap-4">
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default LandingPage;
