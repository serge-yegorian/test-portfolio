import React from 'react'

const ProjectTag = ({name, isSelected, onClick}) => {

  const buttonStyles = isSelected ? "text-white border-primary-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"

  return (
    <div>
        <button onClick={()=>onClick(name)} className={`${buttonStyles} rounded-full border-2 px-3 py-2 md:px-6 md:py-3 text-xl cursor-pointer `}>
            {name}
        </button>
    </div>
  )
}

export default ProjectTag
