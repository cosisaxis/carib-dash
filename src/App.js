import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Food from "./components/Food";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
      <Food /> 
      
    </div>
  );
}

export default App;
