import React from 'react'

const TabButton = ({active, selectTab, children}) => {

const buttonClasses = active ? "text-white border-b border-b-purple-500 " : "text-[#ADB7BE]"

  return (
    <div>
        <button className={`mr-3 font-semibold hover:text-white ${buttonClasses}`} onClick={selectTab}>
          {children}
        </button>
    </div>
  )
}

export default TabButton
