"use client";

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';

const AboutSection = () => {

    const TAB_DATA = [
        {
            title: "Skills",
            id: "skills",
            content: (
                <ul className='list-disc pl-2'>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                </ul>
            )
        },
        {
            title: "Experience",
            id: "experience",
            content: (
                <ul>
                    <li>3+ Years of freelance work</li>
                    <li>Google Proffesional Cloud Developer</li>
                </ul>
            )
        },
        {
            title: "Education",
            id: "education",
            content: (
                <ul>
                    <li>Software Engineering Deiploma from Brainstation</li>
                </ul>
            )
        }
    ]

    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id)
        })
    }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center px-4  py-8 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/about-me.png' width={500} height={500}/>
            <div className='mt-4 md:mt-0 flex flex-col h-full items-start'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro quas dolores quae nobis in unde nemo deserunt, a assumenda illo. Corporis quasi at mollitia aperiam obcaecati molestiae autem porro?</p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t)=>t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
