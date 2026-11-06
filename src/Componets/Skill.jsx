
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiExpo,
  SiSupabase,
  SiVercel,
  SiRender,
  SiDocker,
} from "react-icons/si";

export default function Skill() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React.js",
          icon: <FaReact className="text-cyan-400 text-2xl" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400 text-2xl" />,
        },
        {
          name: "Redux",
          icon: <SiRedux className="text-purple-400 text-2xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500 text-2xl" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-200 text-2xl" />,
        },
        {
          name: "REST APIs",
          icon: <FaNodeJs className="text-green-400 text-2xl" />,
        },
        {
          name: "Redis",
          icon: <SiRedis className="text-red-400 text-2xl" />,
        },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        {
          name: "React Native CLI",
          icon: <FaReact className="text-cyan-400 text-2xl" />,
        },
        {
          name: "Expo",
          icon: <SiExpo className="text-white text-2xl" />,
        },
      ],
    },
    {
      title: "Database & Backend Services",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-400 text-2xl" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-sky-400 text-2xl" />,
        },
        {
          name: "Supabase",
          icon: <SiSupabase className="text-emerald-400 text-2xl" />,
        },
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-400 text-2xl" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-white text-2xl" />,
        },
        {
          name: "Vercel",
          icon: <SiVercel className="text-white text-2xl" />,
        },
        {
          name: "Render",
          icon: <SiRender className="text-purple-400 text-2xl" />,
        },
        {
          name: "Docker",
          icon: <SiDocker className="text-sky-400 text-2xl" />,
        },
      ],
    },
  ];

  return (
    <section
      name="Skills"
      className="hero-bg bg-[#0f172a] py-28 text-white"
    >
      <div className="mx-auto max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-semibold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mx-auto max-w-xl text-gray-400">
            Technologies and tools I use to build scalable
            web and mobile applications.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="rounded-xl border border-gray-700 bg-[#111c3a] p-6 transition-colors duration-300 hover:border-cyan-400"
            >
              <h3 className="mb-5 text-lg font-semibold text-cyan-400">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 text-gray-300 transition-transform duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
