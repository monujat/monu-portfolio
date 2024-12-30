"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "🧩" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Node.js", icon: "🟩" },
  { name: "GraphQL", icon: "🔮" },
  { name: "Next.js", icon: "⚡" },
  { name: "JavaScript", icon: "⚙️" },
  { name: "Git", icon: "🐙" },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-12 px-4 bg-gradient-to-r from-indigo-100 to-blue-200"
    >
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          My Skills
        </h2>
        <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-600">
          Here are some of the technologies I work with:
        </p>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl">{skill.icon}</div>
              <h3 className="mt-3 text-lg md:text-xl font-semibold text-gray-800">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
