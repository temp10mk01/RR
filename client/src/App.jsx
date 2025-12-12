import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
