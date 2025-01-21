import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDiscord, FaWhatsapp } from 'react-icons/fa';

function SocialMedia() {
  const socialLinks = [
    { id: 1, platform: 'GitHub', url: 'https://github.com/helenkilolo', icon: <FaGithub /> },
    { id: 2, platform: 'LinkedIn', url: 'https://www.linkedin.com/in/helen-kilolo-8b7a6352/', icon: <FaLinkedin /> },
    { id: 3, platform: 'Twitter', url: 'https://x.com/ellenkero', icon: <FaTwitter /> },
    { id: 4, platform: 'Email', url: 'mailto:helenkilolo@gmail.com', icon: <FaEnvelope /> },
    { id: 5, platform: 'Discord', url: 'https://discord.com/users/helenkilolo', icon: <FaDiscord /> },
    { id: 6, platform: 'WhatsApp', url: 'https://wa.me/+254726356473', icon: <FaWhatsapp /> },
  ];

  return (
    <motion.div
      className="flex justify-center space-x-6 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF5722] hover:text-orange-400 text-2xl"
          whileHover={{ scale: 1.2 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default SocialMedia;
