import React from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToWrapped = () => {
    const element = document.getElementById('github-wrapped');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl opacity-30"
            style={{
              background: `radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(0,0,0,0) 70%)`,
              width: '60vw',
              height: '60vw',
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Github className="w-20 h-20 text-purple-500 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            GitHub Wrapped
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Your GitHub contributions visualized like never before. Discover your coding journey through an immersive experience.
          </p>
          <button
            onClick={scrollToWrapped}
            className="px-8 py-4 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 transition-colors duration-300 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            View My GitHub Wrapped
          </button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-purple-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;