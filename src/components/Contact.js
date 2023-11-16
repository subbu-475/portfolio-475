import React from 'react'

function Contact() {
  return (
    <div id="contact">
    <div className="container">
        <div className="details1">
            <div className="contact-left">
                <h1 className="sub-title" id="con-col">contact Me</h1>
                <p className="text"><img src="./icons/message1.ico" className="fa-solid fa-paper-plane plane"/>subbudme475@gmail.com</p>
                <p className="text"><img src="./icons/call.ico" className="fa-solid fa-phone plane" />9159029499</p>
                <div className="social-icons">
                    <a href="#"><img src="./icons/facebook.ico" className="fa-brands fa-facebook"/></a>
                    <a href="#"><img src="./icons/linkedin.ico" className="fa-brands fa-linkedin"/></a>
                    <a href="#"><img src="./icons/github.ico" className="fa-brands fa-github"/></a>
                </div>
                <a href="./Subramani Resume.pdf" download className="btn btn2" id="btn-col">Download Resume</a>
                <p className="down-tag1" id="alert">Downloaded successfully!</p>
            </div>
        </div>
    </div>
    <div className="copyright">
        <p>Copyright © Subbu </p>
    </div>
</div>
  )
}

export default Contact;