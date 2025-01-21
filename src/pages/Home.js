import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Particles from "react-tsparticles";
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../context/ThemeContext';

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div
      className={`h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} flex flex-col items-center justify-center text-center relative`}
    >
      {/* Custom Cursor */}
      <style jsx>{`
        .cursor {
          width: 20px;
          height: 20px;
          border: 2px solid ${theme === "dark" ? "#FF5722" : "#333"};
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 1000;
          transition: all 0.1s ease-out;
        }
      `}</style>

      {/* Dynamic Background with Particles */}
      <Particles
        options={{
          background: {
            color: {
              value: theme === "dark" ? "#1A1A2E" : "#FFFFFF",
            },
          },
          particles: {
            color: {
              value: "#FF5722",
            },
            links: {
              enable: true,
              color: theme === "dark" ? "#FFFFFF" : "#000000",
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      />

      {/* Toggle Theme Button */}
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 px-4 py-2 rounded shadow transition-all duration-300 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* 3D Sphere Animation */}
      <div className="w-full h-64 sm:h-80 mt-8">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <Sphere visible args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#FF5722"
              attach="material"
              distort={0.3}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Hero Section */}
      <motion.h1
        className="text-3xl sm:text-5xl font-heading mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm{' '}
        <span className="text-orange-500">
          <Typewriter
            words={[
              "Helen Kilolo",
              "a Full-Stack Developer",
              "a Creative Thinker",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </motion.h1>

      <motion.p
        className="text-base sm:text-xl mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Full-Stack Developer | Crafting Scalable Web Solutions
      </motion.p>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 space-x-4 flex flex-wrap justify-center">
        <motion.a
          href="/about"
          className="px-4 sm:px-6 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition duration-300 text-sm sm:text-base"
          whileHover={{ scale: 1.1 }}
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          About Me
        </motion.a>
        <motion.a
          href="/projects"
          className="px-4 sm:px-6 py-2 bg-secondary text-white rounded-lg hover:bg-indigo-700 transition duration-300 text-sm sm:text-base"
          whileHover={{ scale: 1.1 }}
        >
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          View Projects
        </motion.a>
        <motion.a
          href="/contact"
          className="px-4 sm:px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 text-sm sm:text-base"
          whileHover={{ scale: 1.1 }}
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Contact Me
        </motion.a>
        <motion.a
          href="/CV"
          className="px-4 sm:px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 text-sm sm:text-base"
          whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faFile} className="mr-2" />
          View CV
          </motion.a>

      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/helen-kilolo-8b7a6352/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://github.com/helenkilolo" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="mailto:helenkilolo@gmail.com" className="text-red-500">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
    </div>
  );
}

export default Home;


