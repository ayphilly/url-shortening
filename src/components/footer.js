import React, {Component} from "react"
import logo from "../assets/logo.svg"
import ig from "../assets/icon-instagram.svg"
import fb from "../assets/icon-facebook.svg"
import pin from "../assets/icon-pinterest.svg"
import tw from "../assets/icon-twitter.svg"
import "./footer.css"


function Footer () {
    return (
        <div className="footer">
            <div className="footer-content">
                <img src={logo} alt=" shortly logo " className="logo"/>
                <div className="footer-links">
                    <div className="features">
                        
                        <ul>
                            <p> Features </p>
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div className="resources">
                        
                        <ul>
                            <p> Resources </p>
                            <li>Blogs</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="company">
                        
                        <ul>
                            <p> Company </p>
                            <li>About</li>
                            <li>Our Teams</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-socials">
                        <img src={fb} alt=" facebook logo "/>
                        <img src={tw} alt=" twitter logo "/>
                        <img src={pin} alt=" pinterest logo "/>
                        <img src={ig} alt=" instagram logo "/>

                    </div>

                </div>
                
                

            </div>
            
            

        </div>
    )
}

export default Footer;