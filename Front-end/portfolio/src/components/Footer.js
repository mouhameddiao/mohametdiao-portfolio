import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Liens des réseaux sociaux */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
            <FaGithub size="30" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
            <FaLinkedin size="30" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
            <FaTwitter size="30" />
          </a>
        </div>
        <p className="text-sm">© 2024 Mohamed Diao. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
