import React from 'react'
import javalogo from '../assets/javalogo.png';
import phplogo from '../assets/phplogo.png';
import reactlogo from '../assets/reactlogo.png';

function Portfolio() {
    const cardItems=[
        {
            id:1,
            logo:javalogo,
            name:'Java'
        },
        {
            id:2,
            logo:phplogo,
            name:'PHP'
        },
        {
            id:3,
            logo:reactlogo,
            name:'React'
        }
    ]
  return (
    <>
      <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
     <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>Featured Project</span>
        <div className='grid grid-cols-1 md:grid-cols-4  my-5'>
            {cardItems.map(({id, logo, name}) =>(
                <div key={id} className='md:w-[200px] md:h-[220px] rounded-lg p-1 hover:scale-110 duration-300 shadow-md cursor-pointer border-[2px]'>
                   <img src={logo} alt="" className='w-14 h-14 rounded-full p-1 border-[2px]'/>
                   <div className='px-2 text-xl font-bold mb-2'>
                    {name}
                  </div>
                  <p className='text-sm text-gray-700 px-2'>My journey into web development started </p>
                   <div className='my-2 space-x-2 px-2 flex'>
                    <button className='bg-blue-500 text-white px-2 rounded-md'>Videos</button>
                    <button className='bg-blue-700 text-white px-2 rounded-md'>Source Code </button>
                   </div>
                </div>
            ))}
        </div>
     </div>
      </div>
    </>
  )
}

export default Portfolio
