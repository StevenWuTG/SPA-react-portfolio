import React from 'react'
import './project.scss'

const Project = ( {active , setSelected, title, id, img}) => {

    

    return (
        <li 
            className={ active ? "project active" : "project"}
            onClick={()=> setSelected(id)}
        >
            <div className="item">
                    <img width="150px"
                     src={img} alt="" 
                    />
                    <h3>{title}</h3>
            </div>
        </li>
    )
}

export default Project
