import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ThemeContext } from '../context/ThemeContext';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  useEffect(() => {
    axios
      .get('http://localhost:5000/projects')
      .then((response) => {
        setProjects(response.data);
        setFilteredProjects(response.data);
        const uniqueCategories = [...new Set(response.data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredProjects(
      projects.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(term))
      )
    );
  };

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category));
    }
  };

  return (
    <div
      className={`p-8 ${
        theme === 'dark' ? 'bg-[#1A1A2E] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#000000]'
      }`}
    >
      <motion.h1
        className="text-3xl font-heading font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title or technology..."
          value={searchTerm}
          onChange={handleSearch}
          className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FF5722] ${
            theme === 'dark'
              ? 'bg-[#0F3460] text-gray-300 border-gray-600'
              : 'bg-[#F5F5F5] text-gray-700 border-gray-300'
          }`}
        />
      </div>

      {/* Categories */}
      <div className="mb-6 flex space-x-4 overflow-x-auto">
        {['All', ...categories].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 rounded-lg transition ${
              theme === 'dark'
                ? 'bg-[#0F3460] text-gray-300 hover:bg-[#FF5722]'
                : 'bg-[#E0E0E0] text-gray-700 hover:bg-[#FF5722] hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`p-4 rounded-lg shadow-lg transition ${
              theme === 'dark' ? 'bg-[#0F3460] text-gray-300' : 'bg-[#F5F5F5] text-gray-700'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-heading font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2 text-sm">
              Technologies: {project.technologies.join(', ')}
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href={project.liveDemo}
                className={`px-4 py-2 rounded hover:bg-orange-600 transition ${
                  theme === 'dark' ? 'bg-primary text-white' : 'bg-[#FF5722] text-white'
                }`}
              >
                Live Demo
              </a>
              <a
                href={project.github}
                className={`px-4 py-2 rounded hover:bg-indigo-700 transition ${
                  theme === 'dark' ? 'bg-secondary text-white' : 'bg-[#3F51B5] text-white'
                }`}
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;



