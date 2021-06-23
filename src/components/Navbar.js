import React from 'react'
import './navbar.scss'
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Navbar = () => {
    return (
        <div className="navbar" id="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">intro</a>
                    <div className="itemContainer">
                        <FaceIcon className="icon"/>
                        <span>StevenWuBC@gmail.com</span>
                    </div>

                    {/* <a href="#portfolio" className="logo">portfolio</a>
                    <a href="#contact" className="logo">contact</a> */}
                    


                </div>
                <div className="right">
                    this is right
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
