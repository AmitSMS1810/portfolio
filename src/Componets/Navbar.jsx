import React, { useState } from 'react'
import logo from '../assets/logo.jpeg';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    const [menu,setMenu] = useState(false);

    const navItems= [
        { id:2, text:'AboutUs' },
        { id:3, text:'Skills' },
        { id:4, text:'Projects' },
        { id:5, text:'Experiance' },
        { id:6, text:'ContactUs' }
    ];

    return (
        <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 shadow-lg h-16 sticky top-0 left-0 w-full z-10 bg-[#0f172a] text-white'>
            
            <div className='flex justify-between items-center h-16'>

                {/* LOGO */}
                <ScrollLink 
                    to="Home" 
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                    className="flex space-x-2 cursor-pointer"
                >
                    <img src={logo} alt="" className='w-12 h-12 rounded-full object-cover' />
                    <h1 className='text-xl font-semibold'>
                        Amit kumar
                        <p className='text-sm'>Software Developer</p>
                    </h1>
                </ScrollLink>

                {/* DESKTOP MENU */}
                <ul className='hidden md:flex space-x-8'>
                    {navItems.map(({id,text}) =>(
                        <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                            <ScrollLink 
                                to={text} 
                                smooth={true} 
                                duration={500}
                                offset={-70} 
                                activeClass='active'
                                spy={true}
                            >
                                {text}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                {/* MOBILE ICON */}
                <div onClick={() =>setMenu(!menu)} className='md:hidden cursor-pointer'>
                    {menu ? <IoMdClose size={24}/> : <GiHamburgerMenu size={24}/>}
                </div>
            </div>

            {/* MOBILE MENU */}
            {menu && (
                <div className='bg-[#0f172a] md:hidden'>
                    <ul className='flex flex-col justify-center items-center h-screen space-y-6 text-lg'>
                        {navItems.map(({text,id}) =>(
                            <li key={id}>
                                <ScrollLink 
                                    to={text}
                                    smooth={true} 
                                    duration={500} 
                                    offset={-70} 
                                    activeClass='active'
                                    spy={true}
                                    onClick={() =>setMenu(false)}
                                >
                                    {text}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar;