"use client"; // For client-side rendering with framer-motion
import { motion } from "framer-motion";
import Image from "next/image";

const HeroBanner: React.FC = () => {
  return (
    <section className="w-full h-auto md:h-[80vh] flex items-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 px-4 py-12 md:py-0">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Hi, I&apos;m a{" "}
            <span className="text-yellow-400">React Developer</span>
          </h2>
          <p className="text-base md:text-xl text-gray-200">
            I specialize in building scalable, fast, and user-friendly web
            applications using React, TypeScript, Tailwind CSS, and modern
            tools.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-yellow-400 text-white px-6 py-3 rounded-md shadow-lg hover:bg-yellow-500 transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white text-gray-800 px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Content (Image or Illustration) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/heroBenner.jpeg"
            alt="Developer Illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-xl max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
