import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ContactForm from '../common/ContactForm';
import { siteContent } from '../../data/content';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "tyrese.george@example.com",
      href: "mailto:tyrese.george@example.com"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+254 XXX XXX XXX",
      href: "tel:+254XXXXXXXXX"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary-light">
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
            Get In Touch
          </h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {siteContent.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    className={`card flex items-center space-x-4 hover:shadow-xl transition-all duration-300 ${
                      info.href === "#" ? "cursor-default" : "hover:bg-primary-blue hover:text-white"
                    }`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-primary-blue" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-medium">
                        {info.label}
                      </div>
                      <div className="text-primary-dark font-semibold">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary-dark mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {siteContent.contact.social.map((social, index) => {
                  const IconComponent = {
                    FaGithub, FaLinkedin, FaEnvelope
                  }[social.icon] || FaEnvelope;
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-blue hover:text-white transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{social.platform}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="bg-gradient-to-r from-primary-blue to-blue-600 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4">
                Open to Opportunities
              </h3>
              <p className="text-white/90 mb-6">
                I'm currently available for freelance projects, consulting opportunities,
                and full-time positions in mechatronics engineering, automation, and web development.
              </p>
              <div className="space-y-3">
                {[
                  "Freelance Projects",
                  "Consulting & Advisory",
                  "Full-time Opportunities",
                  "Collaborative Research"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-primary-dark mb-6">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you have a specific project in mind, want to discuss a potential collaboration,
              or simply want to connect and share ideas, I'd love to hear from you.
              Don't hesitate to reach out using any of the methods above or through the contact form.
            </p>

            {/* Response Time */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Quick Response",
                  description: "I typically respond within 24 hours",
                  icon: "⚡"
                },
                {
                  title: "Free Consultation",
                  description: "Initial discussion to understand your needs",
                  icon: "💬"
                },
                {
                  title: "Flexible Terms",
                  description: "Adaptable to different project requirements",
                  icon: "🤝"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-primary-dark mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Final CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
            >
              <motion.a
                href="mailto:tyrese.george@example.com"
                className="btn-primary inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope size={18} />
                <span>Send Email Directly</span>
              </motion.a>

              <motion.a
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work First
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;