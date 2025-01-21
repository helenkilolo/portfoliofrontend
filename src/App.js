import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CV from './pages/CV';
import SocialMedia from './components/SocialMedia';
import './index.css';
// eslint-disable-next-line
import '@mediapipe/tasks-vision';


function App() {
  const [cursorStyle, setCursorStyle] = useState({ top: 0, left: 0 });

  const handleMouseMove = (e) => {
    setCursorStyle({ top: e.clientY, left: e.clientX });
  };

  return (
    <div className="bg-background text-textPrimary min-h-screen font-sans" onMouseMove={handleMouseMove}>
      <div className="cursor" style={cursorStyle}></div>

      <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <ambientLight />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>

      <Router>
        <header className="bg-background text-textPrimary p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-heading">Helen Ndunge Kilolo</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-primary">Home</a></li>
                <li><a href="/about" className="hover:text-primary">About</a></li>
                <li><a href="/projects" className="hover:text-primary">Projects</a></li>
                <li><a href="/contact" className="hover:text-primary">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
        </Routes>

        <footer className="bg-background text-textSecondary p-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Helen Kilolo. All Rights Reserved.</p>
            {/* Social Media Links */}
          <SocialMedia />
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;





