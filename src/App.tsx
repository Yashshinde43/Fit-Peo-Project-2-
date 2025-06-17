import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollProgressBar from "./components/ScrollProgressBar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Latest from "./pages/Latest";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <ScrollProgressBar />
      <Navbar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
