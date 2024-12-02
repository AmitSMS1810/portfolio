import React, { useState } from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/logo.jpeg';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [menu,setMenu] = useState(false);
    const navItems= [
        {
            id:2,
            text:'Home'
        },
        {
            id:2,
            text:'AboutUs'
        },
        {
            id:1,
            text:'Portfolio'
        },
        {
            id:4,
            text:'Experiance'
        },
        {
            id:5,
            text:'ContactUs'
        }
    ];
    return (
        <>
            <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 shadow-lg h-16 sticky top-0 left-0 w-full z-10 bg-white'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={logo} alt="" className='w-12 h-12 rounded-full object-cover' />
                        <h1 className='text-xl font-semibold cursor-pointer'>
                            Amit kumar
                            <p className='text-sm'>Web Developer</p>
                        </h1>
                    </div>
                    <div className=''>
                        <ul className='hidden md:flex space-x-8'>
                            {navItems.map(({id,text}) =>(
                                <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                                    <Link to={text} 
                                    smooth={true} 
                                    duration={500}
                                     offset={-70} 
                                     activeClass='active'>
                                    {text}
                                    </Link>
                                    </li>
                            ))}
                            
                        </ul>
                        <div onClick={() =>setMenu(!menu)} className='md:hidden'>{menu ?<IoMdClose/>:<GiHamburgerMenu/>}

                        </div>
                    </div>
                </div>
                {menu && (
                    <div className='bg-white'>
                    <ul className='md:hidden flex flex-col justify-center items-center h-screen space-y-3 '>
                        {navItems.map(({text,id}) =>(
                            <li key={id}><Link to={text}
                             smooth={true} 
                             duration={500} 
                             offset={-70} 
                             activeClass='active'
                             onClick={() =>setMenu(!menu)}
                             >
                            {text}
                            </Link></li>
                        ))}
                    </ul>
                </div>
                )}
            </div>
        </>
    )
}

export default Navbar
