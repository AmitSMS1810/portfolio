import React from 'react'
import csslogo from '../assets/csslogo.jpeg';
import htmllogo from '../assets/htmllogo.png';
import jslogo from '../assets/jslogo.png';
import mysqllogo from '../assets/mysqllogo.png';
import mongoDb from '../assets/mongoDb.png';
import reactlogo from '../assets/reactlogo.png';
import node from '../assets/node.jpg';
import native from '../assets/native.png';
import tailwind from '../assets/tailwind.png';
function Experience() {
    const cardItems =[
        {
            id:1,
            logo:htmllogo,
            name:'HTML'
           
        },
        {
            id:2,
             logo:csslogo,
            name:'CSS'
        },
        {
            id:3,
            logo:jslogo,
            name:'JS'
        },
        {
            id:4,
            logo:mysqllogo,
            name:'MYSQL'
        },
        {
            id:5,
            logo:mongoDb,
            name:'MongooseDB'
        },
        {
            id:6,
            logo:reactlogo,
            name:'React js'
        },
        {
            id:7,
            logo:node,
            name:'Node js'
        },
        {
            id:8,
            logo:native,
            name:'React Native'
        },
        {
            id:9,
            logo:tailwind,
            name:'Tailwind CSS'
        }
    ]
  return (
    <>
      <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='font-bold text-3xl pb-2'>Experience</h1>
        <span>I have more than 1.6 year of Experience in below technologies</span>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-5 my-10'>
            {cardItems.map(({id, logo, name}) =>(
                <div key={id} className='flex flex-col justify-center items-center border-[2px] md:w-[200px] md:h-[200px] rounded-full '>
                  <div ><img src={logo} alt="" className='w-[150px] rounded-full'/></div>
                  <span>{name}</span>
                </div>
            ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default Experience
