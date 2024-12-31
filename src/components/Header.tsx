"use client"; // For client-side rendering with framer-motion
import { motion } from "framer-motion";
import { useState } from "react";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react"; // Optional icons for hamburger menu
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle

  // Toggle menu visibility for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Name */}

        <Link href="/">
          <motion.h1
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-500">My</span> Portfolio
          </motion.h1>
        </Link>

        {/* Navigation Menu for Desktop */}
        <motion.div
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NavigationMenuItem className="text-gray-700 hover:text-blue-500">
            <a href="#about">About</a>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-gray-700 hover:text-blue-500">
            <a href="#projects">Projects</a>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-gray-700 hover:text-blue-500">
            <a href="#skills">Skills</a>
          </NavigationMenuItem>
          <NavigationMenuItem className="text-gray-700 hover:text-blue-500">
            <a href="#contact">Contact</a>
          </NavigationMenuItem>
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <motion.div
          className="md:hidden flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button onClick={toggleMenu} className="text-gray-800">
            {isMenuOpen ? (
              <X className="text-xl" />
            ) : (
              <Menu className="text-xl" />
            )}
          </button>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.a
          href="#contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hire Me
        </motion.a>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white shadow-md p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-500"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-blue-500"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-700 hover:text-blue-500"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-500"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
