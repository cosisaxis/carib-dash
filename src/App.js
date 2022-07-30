import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}

export default App;
