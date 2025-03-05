import React from "react";

import Contact from "./sections/contact/Contact";
import Home from "./sections/home/Home";
import Impact from "./sections/impact/Impact";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Impact />
      <Contact />
    </>
  );
};

export default App;
