import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";

function Footer() {
    return (
        <>
            <hr />
            <footer name="Footer" className='py-12 bg-gray-950 text-white'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex space-x-3 text-2xl'>
                            <ul className='flex items-center space-x-3 text-2xl'>
                                <li><a href="https://www.facebook.com/?_rdr" target='_blank'><FaFacebook /></a></li>
                                <li><a href="https://www.linkedin.com/feed/" target='_blank'><FaLinkedin /></a></li>
                                <li><a href="https://www.youtube.com/" target='_blank'><IoLogoYoutube /></a></li>
                                <li><a href="https://web.telegram.org/a/" target='_blank'><BsTelegram /></a></li>
                            </ul>
                        </div>
                        <div className='mt-8 border-t border-gray-700 pt-8'>
                            <p>&copy; 2024 your company. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
