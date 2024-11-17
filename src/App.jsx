import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WhyUS from "./WhyUs";
import Card from "./Card";
import Footer from "./Footer";
import MetaComponents from "./MetaComponents";
import JsonComponent from "./JsonComponent";

const App = () => {
  return (
    <div>
      <MetaComponents />
      <JsonComponent />
      <Navbar />
      <Hero />
      <WhyUS />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
