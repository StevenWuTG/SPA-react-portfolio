import React from 'react'
import './project.scss'

const Project = ( {active , setSelected, title, id}) => {

    

    return (
        <li 
            className={ active ? "project active" : "project"}
            onClick={()=> setSelected(id)}
        >
            <h3>
                {title}

            </h3>
        </li>
    )
}

export default Project
