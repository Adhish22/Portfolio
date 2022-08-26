import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/index'
import About from './pages/about';
import Blog from './pages/blog';
import Projects from './pages/projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
