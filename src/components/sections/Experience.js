import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../common/TimelineItem';
import { experience } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
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
            Experience & Achievements
          </h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A journey of continuous learning, practical application, and professional growth
            through academic excellence, internships, competitions, and leadership roles.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TimelineItem
                  item={item}
                  index={index}
                  isLeft={false}
                />
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {experience.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-12">
              Professional Journey Highlights
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎓",
                  title: "Education",
                  description: "B.Sc. Mechatronics Engineering from Dedan Kimathi University",
                  details: ["Dean's List", "Engineering Society Member"]
                },
                {
                  icon: "🏭",
                  title: "Industry Experience",
                  description: "Hands-on experience in precision manufacturing and automation",
                  details: ["CNC Programming", "Quality Control", "PLC Systems"]
                },
                {
                  icon: "🏆",
                  title: "Achievements",
                  description: "Recognition in competitions and leadership roles",
                  details: ["AAKRUTI Challenge", "Technical Lead", "Multiple Awards"]
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{highlight.title}</h4>
                  <p className="text-white/90 mb-4">{highlight.description}</p>
                  <ul className="space-y-2">
                    {highlight.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-sm text-white/80 flex items-center justify-center"
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Skills Growth Timeline */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
            >
              <h4 className="text-xl font-semibold mb-6">Skills Growth Journey</h4>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4">
                  {["2022", "2023", "2024", "2025", "2026"].map((year, index) => (
                    <motion.div
                      key={year}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.8 + index * 0.1 }}
                    >
                      <div className="text-xs md:text-sm font-medium mb-2">{year}</div>
                      <motion.div
                        className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-xs md:text-sm font-bold">
                          {year === "2023" ? "Arduino" :
                           year === "2024" ? "CAD" :
                           year === "2025" ? "Matlab" :
                           year === "2026" ? "ROS" : "Python"}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="h-1 bg-white/30 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 2.4, ease: 'easeOut' }}
                >
                  <div className="h-full bg-white rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          <h3 className="text-2xl font-bold text-primary-dark mb-4">
            Ready to Collaborate?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and challenging projects that push
            the boundaries of mechatronics engineering and innovation.
          </p>
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;