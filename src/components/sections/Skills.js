import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from '../common/SkillCategory';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
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
            Technical Skills
          </h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A comprehensive skill set spanning mechanical design, electronics, programming,
            and modern development tools. Each category represents years of dedicated learning
            and practical application in real-world projects.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <SkillCategory
              key={category.category}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Continuous Learning & Growth
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "5+",
                  label: "Years of Experience",
                  description: "Hands-on engineering and development"
                },
                {
                  number: "20+",
                  label: "Technologies Mastered",
                  description: "From hardware to software solutions"
                },
                {
                  number: "15+",
                  label: "Projects Completed",
                  description: "From concept to deployment"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              <p className="text-white/90 max-w-2xl mx-auto">
                Always exploring new technologies and methodologies to stay at the forefront
                of mechatronics engineering and modern development practices.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Technology Stack Visual */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <h3 className="text-xl font-bold text-center text-primary-dark mb-8">
            Core Technology Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Arduino", "C++", "Python", "React", "JavaScript",
              "SolidWorks", "MATLAB", "Git", "Linux", "Node.js"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8 + index * 0.05 }}
                whileHover={{
                  backgroundColor: '#1e40af',
                  color: 'white',
                  scale: 1.1,
                  rotate: Math.random() * 10 - 5
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;