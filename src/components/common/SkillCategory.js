import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const SkillCategory = ({ category, index }) => {
  const { category: categoryName, icon, color, bgColor, skills } = category;

  // Dynamically get the icon component
  const IconComponent = FaIcons[icon] || FaIcons.FaCog;

  return (
    <motion.div
      className="card h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Category Header */}
      <div className="flex items-center mb-6">
        <motion.div
          className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mr-4`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <IconComponent className={`text-xl ${color}`} />
        </motion.div>
        <h3 className="text-xl font-bold text-primary-dark">
          {categoryName}
        </h3>
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="space-y-2">
            {/* Skill Header */}
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-gray-800">{skill.name}</h4>
                {skill.description && (
                  <p className="text-xs text-gray-500 mt-1">{skill.description}</p>
                )}
              </div>
              <span className="text-sm font-medium text-gray-600">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="skill-progress">
                <motion.div
                  className="skill-progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1 + skillIndex * 0.1,
                    ease: "easeOut"
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Stats */}
      <motion.div
        className="mt-6 pt-6 border-t border-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex justify-between text-sm text-gray-500">
          <span>{skills.length} skills</span>
          <span>Avg: {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;