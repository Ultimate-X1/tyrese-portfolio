import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { siteContent } from '../../data/content';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - Replace with your actual IDs from https://www.emailjs.com/
      // 1. Create account at EmailJS
      // 2. Add email service (Gmail recommended)
      // 3. Create email template with variables: {{from_name}}, {{from_email}}, {{message}}
      // 4. Set template recipient to: tyresegeorge476@gmail.com
      // 5. Get your Service ID, Template ID, and Public Key from dashboard
      const serviceId = 'service_i2sq2vl';
      const templateId = 'template_vrvwvvn'; 
      const publicKey = 'SBtjqNt7XT2FiwE8i'; // Replace with your EmailJS Public Key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'tyresegeorge476@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    {
      name: 'name',
      type: 'text',
      label: siteContent.contact.form.name,
      placeholder: 'John Doe',
      required: true
    },
    {
      name: 'email',
      type: 'email',
      label: siteContent.contact.form.email,
      placeholder: 'john@example.com',
      required: true
    },
    {
      name: 'message',
      type: 'textarea',
      label: siteContent.contact.form.message,
      placeholder: 'Your message here...',
      rows: 6,
      required: true
    }
  ];

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Form Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {siteContent.contact.form.successMessage}
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {siteContent.contact.form.errorMessage}
        </motion.div>
      )}

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {formFields.map((field) => (
          <motion.div
            key={field.name}
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                rows={field.rows}
                className={`form-input ${errors[field.name] ? 'form-input-error' : ''}`}
                placeholder={field.placeholder}
                required={field.required}
                disabled={isSubmitting}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                className={`form-input ${errors[field.name] ? 'form-input-error' : ''}`}
                placeholder={field.placeholder}
                required={field.required}
                disabled={isSubmitting}
              />
            )}

            {errors[field.name] && (
              <motion.p
                className="form-error-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors[field.name]}
              </motion.p>
            )}
          </motion.div>
        ))}

        {/* Submit Button */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full md:w-auto px-8 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner" />
                <span>Sending...</span>
              </>
            ) : (
              <span>{siteContent.contact.form.submitButton}</span>
            )}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;