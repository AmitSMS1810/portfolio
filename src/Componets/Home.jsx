import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import logo from '../assets/logo.jpeg';

function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 pb-10 bg-blue-50'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2  md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed </span>
                        <div className='flex items-center text-2xl md:text-4xl space-x-1'>
                            <h1 className=''>Hello, I'm a</h1>
                            <ReactTyped
                                className='text-red-700'
                                strings={["Programer", "Coder", "Developer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>I am a passionate web developer with expertise in creating
                            modern, responsive websites using<br /> technologies like React,JavaScript, and PHP. My goal is to build user-friendly
                            applications that<br /> solve real-world problems.</p>
                        <br />
                        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between items-center '>
                            <div className='space-y-2'>
                                <h1>Available on</h1>
                                <ul className='flex items-center space-x-3 text-2xl'>
                                    <li><a href="https://www.facebook.com/?_rdr" target='_blank'><FaFacebook /></a></li>
                                    <li><a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedin /></a></li>
                                    <li><a href="https://www.youtube.com/" target='_blank'><IoLogoYoutube /></a></li>
                                    <li><a href="https://web.telegram.org/a/" target='_blank'><BsTelegram /></a></li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1>Currently working on</h1>
                                <ul className='flex items-center space-x-3 text-2xl cursor-pointer'>
                                    <li><FaReact /></li>
                                    <li>< RiTailwindCssFill /></li>
                                    <li><FaPhp /></li>
                                    <li><FaNodeJs /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:ml-48 md:mt-16 order-1 md:order-2 flex justify-center md:justify-start">
                        <img
                            src={logo}
                            alt="Profile"
                            className="w-36 h-36 sm:w-48 sm:h-48 md:w-[450px] md:h-[450px] object-cover rounded-full"
                        />
                    </div>

                </div>
            </div>
            <hr />
        </>
    )
}

export default Home
