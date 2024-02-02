"use client";

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const ProjectsSection = () => {

    const projectsData = [
        {
            id: 1,
            title: "Construction Website",
            description: "Website for the largest construction company in FLorida",
            image: "/images/projects/1.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/"
        },
        {
            id: 2,
            title: "Supplement Compnay Website",
            description: "Website for the largest supplement company in FLorida",
            image: "/images/projects/2.png",
            tag: ["All", "Mobile"],
            gitUrl: "/",
            previewUrl: "/"
        },
        {
            id: 3,
            title: "Coffee Company Website",
            description: "Website for the largest coffee company in FLorida",
            image: "/images/projects/3.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/"
        },
        {
            id: 4,
            title: "Banking Website",
            description: "Website for the largest bank in FLorida",
            image: "/images/projects/4.png",
            tag: ["All", "Web", "Mobile"],
            gitUrl: "/",
            previewUrl: "/"
        },
        {
            id: 5,
            title: "Credit Card Company Website",
            description: "Website for the largest credit card company in FLorida",
            image: "/images/projects/5.png",
            tag: ["All", "Mobile"],
            gitUrl: "/",
            previewUrl: "/"
        },
        {
            id: 6,
            title: "Designer's Clothing Website",
            description: "Website for the largest clothing company in FLorida",
            image: "/images/projects/6.png",
            tag: ["All", "Web", "Mobile"],
            gitUrl: "/",
            previewUrl: "/"
        },
    ]

    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag))

  return (
    <div>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project)=><ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}
    </div>
    </div>
  )
}

export default ProjectsSection
