import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

function About() {
  const { theme } = useContext(ThemeContext); // Access the theme from ThemeContext

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'Git & GitHub', level: 80 },
  ];

  return (
    <div
      className={`container mx-auto p-8 ${
        theme === 'dark' ? 'bg-[#1A1A2E] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#000000]'
      }`}
    >
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        {/* Profile Picture */}
        <div
          className={`w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 ${
            theme === 'dark' ? 'border-[#FF5722] bg-[#0F3460]' : 'border-[#3F51B5] bg-[#E0E0E0]'
          }`}
        >
          <img
            src="/images/picture.jpg"
            alt="Helen Kilolo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className={`text-lg leading-7 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Hi, I'm <span className="text-[#FF5722] font-semibold">Helen Kilolo</span>, a passionate and skilled full-stack developer based in Nairobi, Kenya. I specialize in creating scalable web applications and enjoy bringing ideas to life through clean, efficient code.
          </p>
          <p
            className={`text-lg leading-7 mt-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            With experience in modern technologies like <span className="text-[#FF5722]">React</span>,{' '}
            <span className="text-[#FF5722]">Node.js</span>, and <span className="text-[#FF5722]">Python</span>, I strive to build solutions that solve real-world problems and provide value to users. My journey as a developer is fueled by curiosity, continuous learning, and a commitment to excellence.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`p-4 rounded-lg shadow-lg ${
                theme === 'dark' ? 'bg-[#0F3460]' : 'bg-[#F5F5F5]'
              }`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div
                className={`w-full rounded-full h-4 overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  className="bg-[#FF5722] h-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                ></motion.div>
              </div>
              <p
                className={`mt-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {skill.level}% Proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

