import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { siteContent } from '../../data/content';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Typewriter animation text
  const roles = [
    "Mechatronics Engineer",
    "Innovator",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-blue via-blue-600 to-indigo-700"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={`circle-${index}`}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px, transparent 39px, rgba(255,255,255,0.05) 39px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 39px, rgba(255,255,255,0.05) 39px)', backgroundSize: '40px 40px'}} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image/Avatar */}
          <motion.div
            className="relative mx-auto w-40 h-40 md:w-48 md:h-48"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm border-4 border-white/30" />
            <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-white/10 rounded-full flex items-center justify-center">
              <span className="text-white text-5xl md:text-6xl font-bold">TG</span>
            </div>

            {/* Orbiting dots */}
            {[0, 120, 240].map((rotation, index) => (
              <motion.div
                key={`orbit-${index}`}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <motion.div
                  className="absolute w-3 h-3 bg-white rounded-full"
                  style={{ transformOrigin: '96px center' }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10 + index * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {siteContent.hero.title}
            </h1>
          </motion.div>

          {/* Subtitle with typewriter effect */}
          <motion.div
            className="h-16 md:h-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
              {siteContent.hero.subtitle}
            </h2>
            <motion.p
              className="text-lg md:text-xl text-white/80 mt-4 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {siteContent.hero.description}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="btn-primary bg-white text-primary-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {siteContent.hero.cta1}
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 text-lg font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {siteContent.hero.cta2}
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: FaGithub, href: "https://github.com/tyresegeorge", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/tyresegeorge", label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:tyrese.george@example.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-blue transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-2 hover:text-white/80 transition-colors duration-300"
            whileHover={{ y: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaArrowDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;