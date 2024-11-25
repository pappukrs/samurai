'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setStatus("Thank you for reaching out! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Please fill in all fields.");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 dark:bg-gradient-to-r dark:from-blue-700 dark:via-purple-800 dark:to-pink-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-white">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-200">We'd love to hear from you! Drop us a message, and we'll get back to you.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg transform transition-transform duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-md shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">{status}</p>}
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Get in Touch</h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have a question? We’d love to help. Reach out through any of the methods below:
            </p>
            <div className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              <p>Phone: <strong className="text-gray-800 dark:text-white">+123 456 7890</strong></p>
              <p>Email: <a href="mailto:info@slvskysuites.com" className="text-blue-500 hover:text-blue-600">info@slvskysuites.com</a></p>
              <p>Address: <strong className="text-gray-800 dark:text-white">123 Street, City, Country</strong></p>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-700 transition-all">
                <FaFacebook size={28} />
              </a>
              <a href="#" aria-label="Instagram" className="text-pink-600 hover:text-pink-700 transition-all">
                <FaInstagram size={28} />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-500 transition-all">
                <FaTwitter size={28} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-blue-800 hover:text-blue-900 transition-all">
                <FaLinkedin size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
