import React from 'react'
import './contact.scss'
import emailjs from 'emailjs-com'

const Contact = () => {

    function sendEmail(e){
        e.preventDefault()

        emailjs.sendForm('Gmail', 'template_aqdx4iw', e.target, 'user_9g8wroGHVK37aC43tSjIw')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        });
        alert("message sent")
        e.target.reset()

    }


    return (
        <div className="contact" id="contact">
            
            <div className="form-box">

                <div className="contact-icons">

                    <a href="https://www.linkedin.com/in/stevenwubc/">
                    <img src="https://img.icons8.com/fluent/240/000000/linkedin.png" 
                    alt="linkedin" align="left" width="60px" height="60"></img>
                    </a>

                    <a href="https://github.com/StevenWuTG">
                    <img src="https://img.icons8.com/fluent/240/000000/github.png" 
                    alt="linkedin" align="left" width="60px" height="60"></img>
                    </a>

                    
                    <a href="https://stevenwu91.medium.com/">
                    <img src="https://img.icons8.com/ios-filled/250/000000/medium-monogram--v1.png" 
                    alt="linkedin" align="left" width="60px" height="60"></img>
                    </a>
                    

                </div>
                
                <form className="contact-form" onSubmit={sendEmail}>
                    {/* <input type="hidden" name="contact_number" /> */}
                    <label>Subject:</label>
                    <input type="text" name="subject" />
                    <br />
                    <label>Name:</label>
                    <input type="text" name="name" />
                    <label>Email:</label>
                    <input type="email" name="email" />
                    <label>Message:</label>
                    <input className="message-text" name="message" />
                    <br />
                    <input className="btn btn-primary"  type="submit" value="Send" />
                </form>
            </div>

        </div>
    )
}

export default Contact
