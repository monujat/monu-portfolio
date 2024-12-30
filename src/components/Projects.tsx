"use client";
import { motion } from "framer-motion";
import { Ticket, ShoppingCart, Briefcase } from "lucide-react";

const Projects: React.FC = () => {
  const projectList = [
    {
      name: "Event Ticketing Booking Website",
      description: "A platform for booking event tickets with features like live seat selection, payment integration, and real-time updates.",
      icon: <Ticket className="text-blue-500 w-8 h-8" />,
    },
    {
      name: "E-commerce Store",
      description: "Built a React-based e-commerce site with a Node.js backend, featuring dynamic product filters and user authentication.",
      icon: <ShoppingCart className="text-green-500 w-8 h-8" />,
    },
    {
      name: "Portfolio Website",
      description: "A personal portfolio showcasing skills and projects, built using React, TypeScript, and Tailwind CSS.",
      icon: <Briefcase className="text-purple-500 w-8 h-8" />,
    },
  ];

  return (
    <section id="projects" className="w-full py-12 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                {/* Project Icon */}
                <div className="p-3 bg-gray-100 rounded-full">{project.icon}</div>
                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {project.name}
                </h3>
              </div>
              {/* Project Description */}
              <p className="text-gray-600 text-sm md:text-base">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
