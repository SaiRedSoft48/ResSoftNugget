import React from "react";

import Footer from "../../components/common/Footer";

import CTA from "./CTA";

const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-black h-[40vh] md:h-[80vh] flex flex-col items-center justify-center">
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
