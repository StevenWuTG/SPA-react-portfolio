import React from 'react'
import './intro.scss'
import Typed from 'react-typed'

const Intro = () => {
    return (
        <div className="intro" id="intro">
            <wrapper>

                <h1>Steven Wu - Full Stack Developer</h1>
                
                <Typed
                    className="typed-text"
                    strings={["Web Design", "React UI", "RESTful Apis", "JavaScript", "Ruby on Rails"]}
                    typeSpeed={100}
                    backSpeed={40}
                    loop={true}
                />
                <br></br>
                
                <p>As an avid gamer, it has always been one of my dreams to learn how to program and I fell in love after writing my first few lines of code. A day later, I've decided to turn my dreams into reality by enrolling in The Flatiron School's Immersive Software Engineering bootcamp.</p>
                {/* <br /> */}
                <p>Along with my coding knowledge, I have over twelve years of experience in the restaurant industry with the last six years as a manager for a busy ramen restaurant in midtown Manhattan where I handled duties such as employee scheduling, inventory management and the daily front house operation.</p>
                <br />
                <br />
                <h1>Languages:</h1>
                <br />
                <div className="intro-icons">
                    <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html" align="left" width="40" height="40"/>

                    <img src="https://img.icons8.com/color/48/000000/css3.png" alt="css3" align="left"  height="40"/>
                            
                    <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="js" align="left" width="40" height="40"/>
                            
                    <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" align="left" width="40" height="40"/>
                            
                    <img src="https://img.icons8.com/officel/80/000000/ruby-programming-language.png" alt="ruby" align="left" width="40" height="40"/>
                    <img src="https://img.icons8.com/color/144/000000/postgreesql.png" alt="postgres" align="left" width="40" height="40"/>
                </div>
                {/* <br /> */}
                


            </wrapper>
        </div>
    )
}

export default Intro
