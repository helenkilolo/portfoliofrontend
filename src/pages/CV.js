import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function CV() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen p-8 ${
        theme === 'dark' ? 'bg-[#1A1A2E] text-[#FFFFFF]' : 'bg-[#F9F9F9] text-[#1A1A1A]'
      }`}
    >
      <div
        className={`max-w-4xl mx-auto p-6 rounded-lg shadow-lg ${
          theme === 'dark' ? 'bg-[#0F3460]' : 'bg-[#FFFFFF] border border-gray-300'
        }`}
      >
        <h1 className="text-4xl font-heading mb-4">Helen Kilolo</h1>
        <p className="text-lg mb-6">
          Full-Stack Developer | Nairobi, Kenya | helenkilolo@gmail.com
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-heading mb-2">Experience</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Full Stack Developer</strong> - VeniCodiVici.com (Apr 2024 - Present)
              <p className="text-sm mt-2">
                - Developed and maintained quiz app using MERN stack.
                <br />
                - Configured servers, ensured HTTPS, and orchestrated smooth production deployments.
                <br />
                - Collaborated with teams for cohesive user experiences.
              </p>
            </li>
            <li className="mt-4">
              <strong>Software Engineer</strong> - ALX AFRICA (Jul 2023 - Jun 2024)
              <p className="text-sm mt-2">
                - Designed and developed full-stack web services.
                <br />
                - Gained expertise in Unix system programming and collaboration on software projects.
              </p>
            </li>
            <li className="mt-4">
              <strong>Software Engineer</strong> - Cellulant Kenya Ltd (Aug 2022 - Aug 2023)
              <p className="text-sm mt-2">
                - Developed a payment platform integrating mobile money and banking systems.
                <br />
                - Ensured secure, scalable backend services for high-volume transactions.
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-heading mb-2">Education</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Holberton School</strong> (ALX AFRICA) - Software Engineering (Jul 2023 - Aug 2024)
              <p className="text-sm mt-2">
                - Specialized in backend development, algorithms, and systems engineering.
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-heading mb-2">Projects</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>salonsavvyke</strong> - Salon Booking Platform
              <p className="text-sm mt-2">
                - Features include real-time booking, stylist preferences, and integrated payments.
                <br />
                - Technologies: ReactJS, NodeJS, MongoDB, AWS.
                <br />
                - Impact: Streamlined salon management and improved customer satisfaction.
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-heading mb-2">Skills</h2>
          <ul className="list-disc ml-6">
            <li>HTML/CSS, JavaScript, React, Node.js, Python</li>
            <li>Databases: MySQL, MongoDB, PostgreSQL</li>
            <li>Git/GitHub, Web Servers (Nginx, Apache), Collaboration Tools</li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="/Helen-Kilolo.pdf"
            download
            className={`px-6 py-2 rounded-lg font-bold transition ${
              theme === 'dark'
                ? 'bg-[#FF5722] text-white hover:bg-[#E64A19]'
                : 'bg-[#FF5722] text-white hover:bg-[#E64A19]'
            }`}
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default CV;


