import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const {
    title,
    description,
    technologies,
    image,
    github,
    demo,
    featured
  } = project;

  return (
    <motion.div
      className={`project-card card group ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-100">
        {image ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-blue to-blue-600">
            <FaCode className="text-white text-4xl" />
          </div>
        )}

        {featured && (
          <div className="absolute top-4 right-4 bg-primary-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        {/* Title */}
        <motion.h3
          className="text-xl font-bold text-primary-dark group-hover:text-primary-blue transition-colors duration-300"
          whileHover={{ x: 4 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
              whileHover={{
                backgroundColor: '#1e40af',
                color: 'white',
                scale: 1.05
              }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-2">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-blue transition-colors duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={18} />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
          )}

          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-blue transition-colors duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt size={16} />
              <span className="text-sm font-medium">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;