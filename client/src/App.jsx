import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import "./App.scss";

function App() {
  return ( 
    <div className="App">
      <Nav />
      <Routes>
        <Route path="*" element={<Home />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/apie" element={<About />} />
        <Route path="/kontaktai" element={<Contact />} />
        <Route path="/galerija" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default App;
