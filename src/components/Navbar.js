import React from 'react'
import './navbar.scss'
import FaceIcon from '@material-ui/icons/Face';
// import WorkIcon from '@material-ui/icons/Work';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';


const Navbar = ({ menuOpen, setMenuOpen}) => {
    return (
        <div className={"navbar " + ( menuOpen && "active")} id="navbar">
            <div className="wrapper">
                <div className="left">
                    {/* <a href="#intro" className="logo"> <img className="profilePic" src={profile} alt="profile-pic" /></a> */}
                    <a href="#intro" className="logo">Bio.</a>
                    <div className="itemContainer">
                        <FaceIcon className="icon"/>
                        <span>StevenWuBC@gmail.com</span>
                        
                    </div>

                    {/* <a href="#portfolio" className="logo">portfolio</a>
                    <a href="#contact" className="logo">contact</a> */}
                    
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
