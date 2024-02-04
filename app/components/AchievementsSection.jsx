"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const achievemtnsList = [
    {
        metric: "Projects",
        value: 100,
        postfix: "+"
    },
    {
        metric: "Users",
        value: 1,
        postfix: "M+"
    },
    {
        metric: "Awards",
        value: 10,
        postfix: "+"
    },
    {
        metric: "Years",
        value: 5,
        postfix: "+"
    },
]

const AchievementsSection = () => {

    const AnimatedNumbers = dynamic(()=>
    {return import("react-animated-numbers")}, 
    {ssr: false}
    )

  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-col md:flex-row items-center justify-around'>
      {
        achievemtnsList.map((achievement, index)=>{
            return (
                <div key={index} className="flex flex-col items-center justify-center mx-5 my-5">
                    <h2 className='text-white text-4xl font-bold flex'>
                        <AnimatedNumbers includeComma animateToNumber={parseInt(achievement.value)} locale="en-US" className="text-white text-4xl font-bold" configs={((_, index)=>{ return {mass: 1, friction:100, tension: 140 * (index + 1)}})}/>
                        {achievement.postfix}
                    </h2>
                    <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default AchievementsSection
