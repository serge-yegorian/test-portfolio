import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
      <div className='h-52 md:h-72 relative rounded-t-xl group' style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition'>
            <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full  border-[#ADB7BE] hover:border-white group/link mr-2 '>
                <CodeBracketIcon className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white transition'/>
            </Link>
            <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full  border-[#ADB7BE] hover:border-white group/link transition'>
                <EyeIcon className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white transition'/>
            </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
