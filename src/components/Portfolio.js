import React, { useState } from 'react'
import './portfolio.scss'
import Project from './Project'

const Portfolio = () => {

    const [selected,setSelected] = useState("active")

    const projectstList = [
        {
            id:"gameroom",
            title:"GameRoom"
        },
        {
            id:"landmarkers",
            title:"Landmarkers"
        },
        {
            id:"jokesonus",
            title:"JokesOnUs"
        }
    ]

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    projectstList.map((item) => (
                        <Project
                            id={item.id} 
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                        />
                    ))
                }
            </ul>
            <div className="container">
                <div className="item">
                    <img width="150px"
                     src="https://images.unsplash.com/photo-1593505681742-8cbb6f44de25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" 
                    />
                    <h3>App</h3>
                </div>
                <div className="item">
                    <img width="150px"
                     src="https://images.unsplash.com/photo-1593505681742-8cbb6f44de25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" 
                    />
                    <h3>App</h3>
                </div>
                <div className="item">
                    <img width="150px"
                     src="https://images.unsplash.com/photo-1593505681742-8cbb6f44de25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" 
                    />
                    <h3>App</h3>
                </div>
                
                
            </div>

        </div>
    )
}

export default Portfolio
