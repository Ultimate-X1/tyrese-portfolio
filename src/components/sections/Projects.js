import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaCode, FaCogs } from 'react-icons/fa';
import ProjectCard from '../common/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Define filter categories
  const filters = [
    { id: 'all', label: 'All Projects', icon: FaCogs },
    { id: 'featured', label: 'Featured', icon: FaRobot },
    { id: 'web', label: 'Web Development', icon: FaCode },
    { id: 'hardware', label: 'Hardware', icon: FaRobot }
  ];

  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return showAll || project.featured;
    if (filter === 'featured') return project.featured;
    if (filter === 'web') return project.technologies.some(tech =>
      ['React', 'JavaScript', 'HTML5', 'CSS3'].includes(tech)
    );
    if (filter === 'hardware') return project.technologies.some(tech =>
      ['Arduino', 'C++', '3D Printing', 'CAD Design', 'IoT Sensors'].includes(tech)
    );
    return true;
  });

  // Get projects to display
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-primary-light">
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
            Featured Projects
          </h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A diverse portfolio showcasing expertise in mechatronics engineering,
            web development, and innovative problem-solving across multiple domains.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filterOption) => {
            const IconComponent = filterOption.icon;
            return (
              <motion.button
                key={filterOption.id}
                onClick={() => {
                  setFilter(filterOption.id);
                  setShowAll(false);
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === filterOption.id
                    ? 'bg-primary-blue text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={18} />
                <span>{filterOption.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={`${filter}-${project.id}`}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > 6 && !showAll && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects ({filteredProjects.length - 6} more)
            </motion.button>
          </motion.div>
        )}

        {/* Project Statistics */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-primary-dark mb-8">
              Project Highlights
            </h3>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  number: projects.filter(p => p.featured).length,
                  label: "Featured Projects",
                  description: "Highlight reel"
                },
                {
                  number: projects.filter(p => p.github).length,
                  label: "Open Source",
                  description: "Available on GitHub"
                },
                {
                  number: projects.filter(p => p.demo).length,
                  label: "Live Demos",
                  description: "Interactive projects"
                },
                {
                  number: new Set(projects.flatMap(p => p.technologies)).size,
                  label: "Technologies",
                  description: "Skills utilized"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-primary-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-600">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              <p className="text-gray-600 mb-6">
                Interested in collaboration or want to discuss a project?
              </p>
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Technologies Cloud */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h3 className="text-xl font-bold text-center text-primary-dark mb-8">
            Technologies Used
          </h3>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(new Set(projects.flatMap(p => p.technologies)))
                .sort((a, b) => a.localeCompare(b))
                .map((tech, index) => {
                  const count = projects.filter(p => p.technologies.includes(tech)).length;
                  return (
                    <motion.span
                      key={tech}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        count > 2
                          ? 'bg-primary-blue text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8 + index * 0.02 }}
                      whileHover={{
                        scale: 1.1,
                        rotate: Math.random() * 10 - 5,
                        zIndex: 10
                      }}
                      title={`Used in ${count} project${count > 1 ? 's' : ''}`}
                    >
                      {tech}
                      {count > 2 && <span className="ml-1 text-xs">({count})</span>}
                    </motion.span>
                  );
                })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;