import React from "react";
import Contact from "./Contact";
import Profile from "./Profile";
import Project from "./Project";
import Services from "./Services";
import Steps from "./Steps";
import Technology from "./Technology";
import Trusted from "./Trusted";
const Home = () => {
  return (
    <>
      <Profile />
      {/* <Trusted /> */}
      <Project />
      <Technology />
      <Steps />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
