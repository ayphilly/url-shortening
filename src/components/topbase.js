import React, {useEffect} from "react";
import Logo from "../assets/logo.svg"
import Working from "../assets/illustration-working.svg"
import InputandShorten from "./inputshorten"
import "./topbase.css"



function TopBase () {
    // useEffect(()=>{

    //     document.addEventListener("scroll", ()=> {
    //         var nav = document.querySelector(".navbar");
    //         var tp = document.querySelector(".top-section");
    //         var sticky = tp.offsetTop;
    //         if (window.pageYOffset >= sticky) {
                
    //             nav.style.backgroundColor="white"
    //             nav.classList.add('sticky');
    //         }else {
    //             nav.classList.remove("sticky");
    //         }

    //         }
    //     )
        

    // })

    useEffect (()=> {
        var log = document.querySelector(".nav-logo");
        var nav = document.querySelector(".mob-nav");
        log.addEventListener('click', function(){
            nav.classList.toggle('mobile-nav');

        })

    })
    
    return (
        
        <div className="topbase">
            {/* navbar */}
            <div className="mob-nav">
                <p>Features</p>
                <p>Resources</p>
                <p>Pricing</p>
                <hr/>
                <p>Login</p>
                <p> Sign Up</p>

            </div>
            <div className="navbar">
                <div className="navbar-left">
                    <img src = {Logo} alt="Shortly logo" className="nav-logo"/>
                    <ul className="left-list">
                        <li> Features </li>
                        <li> Pricing </li>
                        <li> Resources </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <p> Login </p>
                    <p> Sign Up</p>
                </div>

            </div>
            <div className="top-section">
                <div className="top-section-left">
                    <h2>More than just shorter links</h2>
                    <p className="body-copy">
                       Build your brand’s recognition and get detailed insights 
                       on how your links are performing.
                    </p>
                    <p className="body-button"> Get Started </p>

                </div>
                <img src={Working} alt="alt working" />

            </div>
            < InputandShorten />

        </div>
    )

}

export default TopBase;