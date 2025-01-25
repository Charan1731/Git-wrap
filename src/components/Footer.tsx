import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Github className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-white font-bold">GitHub Wrapped</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Charan1731" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://x.com/CharanR18433412" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/charandeep-reddy-2640a4301/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-purple-500/20 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} GitHub Wrapped. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;