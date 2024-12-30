"use client";

import React from "react";
import { Mail, Phone, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h2>

        <p className="text-gray-600 text-base md:text-lg mb-6">
          Feel free to reach out to me using the information below:
        </p>

        <ul className="space-y-4 md:space-y-6 text-gray-600 text-sm md:text-base">
          <motion.li
            className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 hover:text-blue-500 transition-colors duration-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <User className="text-blue-500" />
            <span>
              <strong>Name:</strong> Monu Choudhary
            </span>
          </motion.li>

          <motion.li
            className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 hover:text-blue-500 transition-colors duration-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="text-blue-500" />
            <span>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:monuchoudhary660@gmail.com"
                className="text-blue-500 hover:underline"
              >
                monuchoudhary660@gmail.com
              </a>
            </span>
          </motion.li>

          <motion.li
            className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 hover:text-blue-500 transition-colors duration-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Phone className="text-blue-500" />
            <span>
              <strong>Mobile:</strong> 9829767059
            </span>
          </motion.li>

          <motion.li
            className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 hover:text-blue-500 transition-colors duration-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500">👨‍💻</span>
            <span className="text-center md:text-left">
              <strong>Current Role:</strong> React Developer working on an Event
              Ticketing Booking Website
            </span>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
