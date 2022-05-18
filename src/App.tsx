import React from "react";
import {
  About,
  Contacts,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
  // Testimonials,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
