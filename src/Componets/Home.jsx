import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import home from "../assets/home.png";

function Home() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    return (
        <>
            <div
                name="Home"
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full text-white relative overflow-hidden"
                style={{
                    background: `radial-gradient(500px at ${position.x}px ${position.y}px, rgba(59,130,246,0.25), transparent 60%), #0f172a`,
                }}
            >
                <div
                    className="fixed w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full pointer-events-none z-0"
                    style={{
                        top: position.y - 150,
                        left: position.x - 150,
                    }}
                ></div>
                {/* 🔥 BACKGROUND GLOW */}
                <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

                <div className="mx-auto max-w-7xl px-4 py-12 md:px-16 md:py-20">
                    <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">

                        {/* LEFT SECTION */}
                        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">

                            <span className="inline-block rounded-full bg-gray-800 px-4 py-1 text-sm text-gray-300">
                                Welcome To My Portfolio
                            </span>

                            <h1 className="text-3xl font-bold md:text-5xl leading-tight">
                                Hello, I'm{" "}
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                    Amit Kumar
                                </span>
                            </h1>

                            <h2 className="text-2xl font-semibold md:text-4xl">
                                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                                    <ReactTyped
                                        strings={["Programmer", "Developer", "Designer"]}
                                        typeSpeed={50}
                                        backSpeed={40}
                                        loop
                                    />
                                </span>
                            </h2>

                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                                1.6+ years of experience building production-level applications for real clients across CRM, healthcare, and e-commerce.
                            </p>

                            <div className="flex flex-col gap-4 items-center md:items-start">
                                <div className="flex gap-5 text-2xl">
                                    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                                        <FaLinkedin className="hover:text-blue-400 transition" />
                                    </a>
                                    <a href="https://github.com/AmitSMS1810/" target="_blank" rel="noreferrer">
                                        <FaGithub className="hover:text-gray-300 transition" />
                                    </a>
                                </div>

                                <div className="flex gap-5 text-3xl">
                                    <FaReact className="text-cyan-400" />
                                    <RiTailwindCssFill className="text-sky-400" />
                                    <TbBrandReactNative className="text-teal-400" />
                                    <FaNodeJs className="text-green-500" />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a
                                    href="https://drive.google.com/file/d/171oGhYzRBuYSftgJ7SADKQv3Y9engJeY/view?usp=sharing"
                                    target="_blank"
                                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition duration-300"
                                >
                                    Download Resume
                                </a>
                                <a
                                    href="#ContactUs"
                                    className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition duration-300"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex justify-center"
                            >
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative"
                                >
                                    <img
                                        src={home}
                                        alt="Profile"
                                        className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px]"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;