import React from "react";
import Footer from "../Components/Footer";
import App_Navbar from "../Components/App_Navbar";
import Services from "../Components/Services";
import Landing from "../Components/Landing";
import About from "../Components/About";
import Clients from "../Components/Clients";
import Work from "../Components/Work.jsx";

const Home = () => {
  return (
    <div className="Home">
      <App_Navbar />
      <Landing />
      <About />
      <Services />
      <Clients />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
