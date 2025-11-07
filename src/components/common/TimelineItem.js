import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const TimelineItem = ({ item, index, isLeft }) => {
  const {
    title,
    organization,
    location,
    duration,
    type,
    description,
    achievements,
    technologies
  } = item;

  const getIcon = () => {
    switch (type) {
      case 'education':
        return FaGraduationCap;
      case 'internship':
      case 'leadership':
        return FaBriefcase;
      default:
        return FaBuilding;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'education':
        return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'internship':
        return 'bg-green-100 text-green-600 border-green-200';
      case 'leadership':
        return 'bg-purple-100 text-purple-600 border-purple-200';
      case 'competition':
        return 'bg-orange-100 text-orange-600 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const IconComponent = getIcon();

  return (
    <motion.div
      className={`relative flex items-center mb-12 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 -z-10" />

      {/* Timeline Dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-blue rounded-full border-4 border-white shadow-lg z-10"
        whileHover={{ scale: 1.2 }}
      />

      {/* Content Card */}
      <motion.div
        className={`w-full md:w-5/12 ${
          isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
        } text-center md:text-left`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="card relative">
          {/* Type Badge */}
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor()} mb-4`}>
            <IconComponent className="mr-1" size={12} />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>

          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-primary-dark mb-2">
              {title}
            </h3>
            <p className="text-primary-blue font-medium mb-1">
              {organization}
            </p>
          </div>

          {/* Meta Information */}
          <div className={`flex flex-wrap gap-3 justify-center ${
            isLeft ? 'md:justify-end' : 'md:justify-start'
          } text-sm text-gray-600 mb-4`}>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1" size={12} />
              {location}
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-1" size={12} />
              {duration}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            {description}
          </p>

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-primary-dark mb-2">Key Achievements:</h4>
              <ul className="space-y-1">
                {achievements.map((achievement, achIndex) => (
                  <motion.li
                    key={achIndex}
                    className="text-sm text-gray-600 flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + achIndex * 0.1 }}
                  >
                    <span className="text-primary-blue mr-2">•</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
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
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;