import React from 'react'
import "./Sidebar.css"

const Sidebar = ({icon,title }) => {
  return (
    <div className="Sidebar__main">
        <p className='Sidebar__icon'>{icon}</p>
        <h2 className='Sidebar__title'>{title}</h2>
    </div>
  )
}

export default Sidebar