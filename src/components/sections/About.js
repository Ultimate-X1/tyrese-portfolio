import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaRobot, FaTools } from 'react-icons/fa';
import { siteContent } from '../../data/content';

const About = () => {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "Dedan Kimathi University of Technology"
    },
    {
      icon: FaRobot,
      title: "Passion",
      description: "Robotics & Automation"
    },
    {
      icon: FaTools,
      title: "Expertise",
      description: "Mechatronics Systems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mx-auto">
            {siteContent.about.title}
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none">
              {siteContent.about.bio.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </div>

            {/* CV Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href={siteContent.about.cvLink}
                download
                className="btn-primary inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload size={18} />
                <span>{siteContent.about.cvButtonText}</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image/Card */}
            <div className="relative">
              {/* Main card */}
              <motion.div
                className="card bg-white p-8 shadow-xl"
                whileHover={{ y: -5 }}
              >
                <div className="text-center space-y-6">
                  {/* Avatar */}
                  <motion.div
                    className="relative mx-auto w-32 h-32"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-blue-600 rounded-full" />
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary-blue">TG</span>
                    </div>
                  </motion.div>

                  {/* Name and Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">
                      Tyrese George
                    </h3>
                    <p className="text-primary-blue font-medium">
                      Mechatronics Engineer
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    {[
                      { number: "5+", label: "Years Experience" },
                      { number: "10+", label: "Projects Completed" },
                      { number: "100%", label: "Dedication" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-2xl font-bold text-primary-blue">
                          {stat.number}
                        </div>
                        <div className="text-xs text-gray-600">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating highlights */}
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${
                    index === 0 ? '-top-4 -right-4' :
                    index === 1 ? '-bottom-4 -left-4' :
                    'top-1/2 -right-8 transform -translate-y-1/2'
                  } bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 z-10`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                    <highlight.icon className="text-primary-blue" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-dark text-sm">
                      {highlight.title}
                    </div>
                    <div className="text-xs text-gray-600">
                      {highlight.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-blue-600/5 rounded-2xl transform rotate-3" />
          </motion.div>
        </div>

        {/* Key Areas Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-primary-dark mb-12">
            Areas of Focus
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤖",
                title: "Robotics",
                description: "Design and development of intelligent robotic systems"
              },
              {
                icon: "⚙️",
                title: "Automation",
                description: "Industrial automation and control systems"
              },
              {
                icon: "💻",
                title: "Embedded Systems",
                description: "Microcontroller programming and IoT integration"
              },
              {
                icon: "🔧",
                title: "Smart Design",
                description: "Innovative product design and prototyping"
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                className="card text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary-dark mb-2">
                  {area.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;