
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiExpo,
  SiVercel,
  SiRender,
} from "react-icons/si";

export default function About() {
  const [selectedTech, setSelectedTech] = useState(null);

  const techStack = [
    // FRONTEND
    {
      name: "React.js",
      category: "Frontend Development",
      icon: <FaReact className="text-cyan-400 text-2xl shrink-0" />,
      experience: "1.6+ Years",
      started: "2024",
      projects: "10+ modules / projects",
      level: 85,
      description:
        "Developed responsive web applications using reusable components, React Hooks, API integration, routing, and state management. Worked on business dashboards, management systems, and production-oriented user interfaces.",
    },
    {
      name: "JavaScript",
      category: "Frontend Development",
      icon: <SiJavascript className="text-yellow-400 text-2xl shrink-0" />,
      experience: "Used with React",
      started: "2023",
      projects: "Multiple projects",
      level: 75,
      description:
        "Used JavaScript ES6+ features, array methods, objects, promises, async/await, and API handling while developing web and mobile applications.",
    },
    {
      name: "Redux",
      category: "Frontend Development",
      icon: <SiRedux className="text-purple-400 text-2xl shrink-0" />,
      experience: "Hands-on experience",
      started: "2023",
      projects: "Multiple applications",
      level: 70,
      description:
        "Worked with centralized state management to manage shared application data, actions, reducers, and predictable state updates in React applications.",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend Development",
      icon: <SiTailwindcss className="text-sky-400 text-2xl shrink-0" />,
      experience: "1.6+ Years",
      started: "2023",
      projects: "Multiple projects",
      level: 90,
      description:
        "Built responsive interfaces using utility-first styling, reusable layouts, responsive breakpoints, custom colors, and consistent UI patterns.",
    },

    // BACKEND
    {
      name: "Node.js",
      category: "Backend Development",
      icon: <FaNodeJs className="text-green-500 text-2xl shrink-0" />,
      experience: "Hands-on experience",
      started: "2024",
      projects: "Backend APIs",
      level: 45,
      description:
        "Working with server-side JavaScript, environment variables, asynchronous operations, API integrations, error handling, and backend application structure.",
    },
    {
      name: "Express.js",
      category: "Backend Development",
      icon: <SiExpress className="text-gray-200 text-2xl shrink-0" />,
      experience: "Hands-on experience",
      started: "2024",
      projects: "REST API development",
      level: 45,
      description:
        "Building REST APIs with routes, controllers, middleware, request validation, and centralized error handling using Express.js.",
    },
    {
      name: "Redis",
      category: "Backend Development",
      icon: <SiRedis className="text-red-400 text-2xl shrink-0" />,
      experience: "Practical exposure",
      started: "2026",
      projects: "Backend integrations",
      level: 30,
      description:
        "Exploring Redis for low-latency data access, caching, and supporting backend workflows that benefit from fast in-memory storage.",
    },

    // MOBILE
    {
      name: "React Native CLI",
      category: "Mobile Development",
      icon: <FaReact className="text-cyan-400 text-2xl shrink-0" />,
      experience: "Mobile development",
      started: "2024",
      projects: "Mobile applications",
      level: 70,
      description:
        "Developing cross-platform mobile applications with reusable components, navigation, API integration, device features, and responsive mobile layouts using React Native CLI.",
    },
    {
      name: "Expo",
      category: "Mobile Development",
      icon: <SiExpo className="text-white text-2xl shrink-0" />,
      experience: "Hands-on experience",
      started: "2026",
      projects: "Mobile application development",
      level: 60,
      description:
        "Working with Expo, Expo Router, development builds, app configuration, and device capabilities to build and test React Native applications.",
    },

    // DATABASE AND SERVICES
    {
      name: "MongoDB",
      category: "Database & Services",
      icon: <SiMongodb className="text-green-400 text-2xl shrink-0" />,
      experience: "Foundational experience",
      started: "2023",
      projects: "Database integrations",
      level: 40,
      description:
        "Learning and working with document-based data storage, collections, queries, schemas, and database integration in Node.js applications.",
    },
    {
      name: "PostgreSQL",
      category: "Database & Services",
      icon: <SiPostgresql className="text-sky-400 text-2xl shrink-0" />,
      experience: "Hands-on experience",
      started: "2026",
      projects: "Healthcare backend",
      level: 55,
      description:
        "Working with relational data, SQL queries, tables, constraints, relationships, and schema migrations for backend applications.",
    },
    {
      name: "Supabase",
      category: "Database & Services",
      icon: <SiSupabase className="text-emerald-400 text-2xl shrink-0" />,
      experience: "Hands-on experience",
      started: "2026",
      projects: "MindStocs backend",
      level: 60,
      description:
        "Using Supabase for PostgreSQL database access, authentication, Row Level Security policies, database functions, and schema migrations.",
    },

    // TOOLS AND DEPLOYMENT
    {
      name: "Git",
      category: "Tools & Deployment",
      icon: <FaGitAlt className="text-orange-400 text-2xl shrink-0" />,
      experience: "Development workflow",
      started: "2023",
      projects: "Multiple repositories",
      level: 70,
      description:
        "Using Git for version control, commits, branches, merging, and maintaining project history during development.",
    },
    {
      name: "GitHub",
      category: "Tools & Deployment",
      icon: <FaGithub className="text-white text-2xl shrink-0" />,
      experience: "Development workflow",
      started: "2023",
      projects: "Multiple repositories",
      level: 75,
      description:
        "Managing source code repositories, pushing changes, collaborating through Git workflows, and maintaining project code.",
    },
    {
      name: "Vercel",
      category: "Tools & Deployment",
      icon: <SiVercel className="text-white text-2xl shrink-0" />,
      experience: "Deployment experience",
      started: "2024",
      projects: "Web applications",
      level: 65,
      description:
        "Deploying frontend applications, configuring environment variables, connecting repositories, and troubleshooting production build issues.",
    },
    {
      name: "Render",
      category: "Tools & Deployment",
      icon: <SiRender className="text-purple-400 text-2xl shrink-0" />,
      experience: "Deployment exposure",
      started: "2026",
      projects: "Backend deployment",
      level: 35,
      description:
        "Working with backend deployment concepts, production environment variables, service configuration, and application logs.",
    },
  ];

  const groupedSkills = [
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "Database & Services",
    "Tools & Deployment",
  ];

  return (
    <section
      name="AboutUs"
      className="hero-bg bg-[#0f172a] py-24 text-white md:py-28"
    >
      <div className="mx-auto grid max-w-[1300px] items-start gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-24"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get to know me
          </p>

          <h2 className="mb-6 text-4xl font-semibold md:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mb-5 text-lg leading-relaxed text-gray-300">
            I’m a{" "}
            <span className="font-semibold text-cyan-400">
              Full Stack Developer
            </span>{" "}
            with experience building web and mobile applications using{" "}
            <span className="font-medium text-white">
              React.js, React Native, Node.js, and PostgreSQL.
            </span>
          </p>

          <p className="leading-relaxed text-gray-400">
            I enjoy building responsive user interfaces, integrating APIs,
            developing backend services, and working with databases. I focus
            on reusable components, clean code, and practical solutions for
            real-world applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-3">
              <p className="text-sm font-semibold text-cyan-400">
                Web Development
              </p>
            </div>

            <div className="rounded-lg border border-purple-400/40 bg-purple-500/10 px-4 py-3">
              <p className="text-sm font-semibold text-purple-300">
                Mobile Development
              </p>
            </div>

            <div className="rounded-lg border border-green-400/40 bg-green-500/10 px-4 py-3">
              <p className="text-sm font-semibold text-green-300">
                Backend & APIs
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3 text-sm text-gray-300">
            <p>✓ Responsive web and mobile interfaces</p>
            <p>✓ REST API and database integration</p>
            <p>✓ Version control and deployment workflows</p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {groupedSkills.map((category, categoryIndex) => {
            const skills = techStack.filter(
              (tech) => tech.category === category
            );

            return (
              <div key={category}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-6 w-1 rounded-full bg-cyan-400" />

                  <h3 className="text-lg font-semibold text-white">
                    {category}
                  </h3>

                  <span className="text-xs text-gray-500">
                    {String(skills.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {skills.map((tech, index) => (
                    <motion.button
                      type="button"
                      key={tech.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: Math.min(index * 0.06, 0.24),
                      }}
                      whileHover={{ y: -3 }}
                      onClick={() => setSelectedTech(tech)}
                      className="flex min-w-0 items-center gap-3 rounded-xl border border-gray-700 bg-[#111c3a] p-4 text-left transition-colors duration-300 hover:border-cyan-400 hover:bg-[#142344] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      {tech.icon}

                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium text-gray-200">
                          {tech.name}
                        </span>

                        <span className="mt-1 block text-xs text-gray-500">
                          View details
                        </span>
                      </span>

                      <span className="text-gray-500" aria-hidden="true">
                        ↗
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* TECHNOLOGY DETAILS MODAL */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="tech-modal-title"
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="my-auto max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-cyan-400/50 bg-[#0f172a] p-6 shadow-[0_0_40px_rgba(0,255,255,0.12)] sm:p-8"
            >
              {/* MODAL HEADER */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  {selectedTech.icon}

                  <div>
                    <p className="mb-1 text-xs text-gray-500">
                      {selectedTech.category}
                    </p>

                    <h3
                      id="tech-modal-title"
                      className="text-xl font-semibold text-cyan-400 sm:text-2xl"
                    >
                      {selectedTech.name}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTech(null)}
                  aria-label="Close technology details"
                  className="rounded-lg px-3 py-1 text-xl text-gray-400 transition hover:bg-white/10 hover:text-white"
                >
                  ×
                </button>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-[#111c3a] p-4">
                  <p className="mb-1 text-xs text-gray-500">Experience</p>
                  <p className="font-medium text-white">
                    {selectedTech.experience}
                  </p>
                </div>

                <div className="rounded-lg bg-[#111c3a] p-4">
                  <p className="mb-1 text-xs text-gray-500">Started</p>
                  <p className="font-medium text-white">
                    {selectedTech.started}
                  </p>
                </div>

                <div className="rounded-lg bg-[#111c3a] p-4 sm:col-span-2">
                  <p className="mb-1 text-xs text-gray-500">
                    Project exposure
                  </p>
                  <p className="font-medium text-white">
                    {selectedTech.projects}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-2 font-semibold text-white">
                  What I work with
                </h4>

                <p className="text-sm leading-7 text-gray-400">
                  {selectedTech.description}
                </p>
              </div>

              {/* SELF-ASSESSED FAMILIARITY */}
              <div className="mt-7">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-sm text-gray-400">
                    Familiarity level
                  </p>

                  <p className="text-sm font-semibold text-cyan-400">
                    {selectedTech.level}%
                  </p>
                </div>

                <div
                  className="h-2 overflow-hidden rounded-full bg-gray-700"
                  role="progressbar"
                  aria-label={`${selectedTech.name} familiarity level`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={selectedTech.level}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedTech.level}%` }}
                    transition={{ duration: 0.6 }}
                    className="h-full rounded-full bg-cyan-400"
                  />
                </div>

                <p className="mt-2 text-xs text-gray-500">
                  Self-assessed estimate; adjust it to reflect your actual
                  confidence and practical experience.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTech(null)}
                className="mt-7 w-full rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-[#0f172a] transition hover:bg-cyan-300"
              >
                Close Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
