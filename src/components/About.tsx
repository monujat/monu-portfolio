'use client'
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <motion.p
            className="text-gray-700 text-lg leading-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            My name is{" "}
            <span className="font-semibold text-gray-800">Monu Choudhary</span>. I was born on{" "}
            <span className="font-semibold text-gray-800">12/12/1998</span>, and I am a skilled{" "}
            <span className="font-semibold text-blue-600">React Developer</span> with over 3 years of
            experience. I completed my B.Tech in Computer Science in{" "}
            <span className="font-semibold text-gray-800">2021</span>.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            I have been working as a software engineer for the past three years, specializing in{" "}
            <span className="font-semibold text-blue-600">React and Node.js</span>. Currently, I am
            contributing to an{" "}
            <span className="font-semibold text-blue-600">Event Ticketing Booking Website</span>, where I
            develop scalable and efficient features for users.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg leading-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            I am passionate about creating user-friendly and responsive web applications that solve
            real-world problems. My goal is to continue growing as a developer and make meaningful
            contributions to the tech community.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
