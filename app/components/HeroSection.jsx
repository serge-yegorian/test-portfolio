"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration: 0.5}}  className='grid grid-cols-1 sm:grid-cols-12'>
      <div className='col-span-5 place-self-center '>
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400] lg:h-[400] relative'>
            <Image className='absolute ' src='/images/profile.png' alt='hero image' width={300} height={500}/>
        </div>
      </div>
      <div className='col-span-7 place-self-center text-center sm:text-left mt-4 lg:mt-0 justify-self-start'>
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 '>Hello, I'm{""}</div>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Serge',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Designer',
        1000,
        'SEO Master',
        1000,
        'Digital Marketer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
        <p className='text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad a quo laudantium voluptatibus ipsam ducimus, dolore optio harum, modi non obcaecati mollitia sapiente assumenda perspiciatis, itaque maxime vero qui?</p>
        <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white hover:bg-slate-200'>Hire Me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection
