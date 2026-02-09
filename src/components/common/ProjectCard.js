import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const {
    title,
    description,
    technologies,
    images,
    github,
    demo,
    featured
  } = project;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
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
        {/* Project Image Carousel */}
        <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gray-100 cursor-pointer" onClick={() => openModal(currentImageIndex)}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              >
                <FaChevronRight size={16} />
              </button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </>
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

      {/* Full-Screen Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
              <motion.img
                src={images[modalImageIndex]}
                alt={`${title} - Image ${modalImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <FaTimes size={20} />
              </button>

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevModalImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextModalImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaChevronRight size={24} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                    {modalImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectCard;