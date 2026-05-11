import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from 'react-icons/fa';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
      // Reset the success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div id="contact" className="py-20">
      <div className="page-width">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-red-600">Get In </span>
            Touch
          </h2>
          <p className="text-[#f1f1f1] text-xl max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-700 bg-[#111] flex-shrink-0">
                <FaEnvelope className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:syedaliasghar355@gmail.com"
                  className="text-gray-300 hover:text-red-600 transition"
                >
                  syedaliasghar355@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-700 bg-[#111] flex-shrink-0">
                <FaPhone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a
                  href="tel:+923272760461"
                  className="text-gray-300 hover:text-red-600 transition"
                >
                  +92 327 276 0461
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-700 bg-[#111] flex-shrink-0">
                <FaMapMarkerAlt className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Location
                </h3>
                <p className="text-gray-300">
                  Model Town, Rawalpindi, Pakistan
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Syed70868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-700 bg-[#111] hover:border-red-600 hover:bg-red-600/10 transition"
                >
                  <FaGithub className="w-6 h-6 text-red-600" />
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-ali-asghar-5aa10037a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-700 bg-[#111] hover:border-red-600 hover:bg-red-600/10 transition"
                >
                  <FaLinkedin className="w-6 h-6 text-red-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-[#111]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border text-white placeholder-gray-500 focus:outline-none transition ${
                    errors.name
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-red-600'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border text-white placeholder-gray-500 focus:outline-none transition ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-red-600'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border text-white placeholder-gray-500 focus:outline-none transition ${
                    errors.subject
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-red-600'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border text-white placeholder-gray-500 focus:outline-none transition resize-none ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-gray-700 focus:border-red-600'
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed transition duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 rounded-lg bg-green-600/20 border border-green-600 text-green-400 text-center">
                  Thank you! Your message has been sent successfully. I'll get
                  back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
