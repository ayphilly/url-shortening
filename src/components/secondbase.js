import React, {Component} from "react";
import Brand from "../assets/icon-brand-recognition.svg"
import "./secondbase.css"

function secondBase () {
    return (
        <div className="secondbase">
            <div className="second-top">
                <h2>Advanced Statistics</h2>
                <p> 
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard. 
                </p>
            </div>
            
            <div className="secondbase-card">
                <div className="card-temp">
                    <div className="icon-box">
                    <img src={Brand} alt="brand-recognition" />

                    </div>
                    
                    <h4>Brand Recognition</h4>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>

                </div>
                <hr/>
                <div className="card-temp two">
                    <div className="icon-box">
                    <img src={Brand} alt="brand-recognition" />

                    </div>
                    
                    <h4>Brand Recognition</h4>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>

                </div>
                <hr/>
                <div className="card-temp three">
                    <div className="icon-box">
                    <img src={Brand} alt="brand-recognition" />

                    </div>
                    
                    <h4>Brand Recognition</h4>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>

                </div>
                

            </div>

        </div>
    )
}

export default secondBase;