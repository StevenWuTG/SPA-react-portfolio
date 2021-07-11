import React, { useState } from 'react'
import './portfolio.scss'
// import Project from './Project'
import gameroomImg from '../images/gameroom.jpeg'
import jokesonusImg from '../images/jokesonus.jpeg'
import landmarkersImg from '../images/landmarkers.jpeg'
import ReactPlayer from 'react-player'

const Portfolio = () => {

    // const [selected,setSelected] = useState("active")

    // const projectstList = [
    //     {
    //         id:"gameroom",
    //         title:"GameRoom",
    //         img: gameroomImg
    //     },
    //     {
    //         id:"landmarkers",
    //         title:"Landmarkers",
    //         img: landmarkersImg
    //     },
    //     {
    //         id:"jokesonus",
    //         title:"JokesOnUs",
    //         img: jokesonusImg
    //     }
    // ]

    return (
        <div className="portfolio" id="portfolio">
            {/* <h1>Portfolio</h1> */}
            {/* <ul>
                {
                    projectstList.map((item) => (
                        <Project
                            id={item.id} 
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            img={item.img}
                        />
                    ))
                }
            </ul> */}
            {/* <div className="container">
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
                
                
            </div> */}

            <div className="container">
                <div className="item">
                    
                    <div className="portfolio-player">
                        <ReactPlayer
                            className="portfolio-player"
                            url="https://www.youtube.com/watch?v=x1XqqEM3NuE"
                            controls
                            vidmeConfig="1080p"
                        />

                    </div>
        
                    <div className="text">
                        <h1 className="title">Game Room</h1>
                        <p>Being a avid gamer, I would frequent alot of gaming review sites such as GameRanx.com or Ign.com. So for my capstone project at The Flatiron School, I thought it would be fun to try to build a gaming community website on my own and I ended up having a blast and learning a ton as well. I used React with Redux for the frontend and I created a custom backend API server using Ruby on Rails  </p>

                    </div>
                </div>
            
                <div className="item">
                    
                    <ReactPlayer
                        className="portfolio-player"
                        url="https://www.youtube.com/watch?v=81gCyDGc3vg" 
                        controls
                        vidmeConfig="1080p"
                    />
                    <div className="text">
                        <h1>Landmarkers</h1>
                        
                        <p>During the pandemic my friends and I would constantly reminisce about our favorite local establishments or hangout spots, so I built this webapp for sharing our favorite locations/landmarks with friends and family. I built this with my friend Karina who handled most of the styling while I worked on implementing the google maps and geocode API functions.</p>
                        
                    </div>
                </div>
                <div className="item">
                    
                    <ReactPlayer
                    className="portfolio-player"
                    url="https://www.youtube.com/watch?v=d-inxohHvKk"
                    controls
                    vidmeConfig="1080p"
                    />
                    <div className="text">
                        
                        <h1>JokesOnUs</h1>
                        <p>This my first webapp built using only Ruby on Rails. I had a friend who was a standup comedian and I thought it would be funny to build a crappy 90s style social media website but for his fellow comedians to share jokes and review comedy gigs. </p>
                    </div>

                </div>
            
            
            
            </div>

        </div>
    )
}

export default Portfolio
