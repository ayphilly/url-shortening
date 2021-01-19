import React, {useState, useEffect} from "react";
import "./inputshorten.css"

function InputandShorten () {

    const [url, setUrl] = useState('');

    const handleUserInput = (e) => {

        var url = e.target.value;
        setUrl(url);

    }
    const handleSubmit = (e) => {
        alert("url to shorten is " + url);
        e.preventDefault();
    }
    return (
        <div className="input-shorten">
            <form onSubmit={ (e)=> handleSubmit(e)}>
                <input type="text" name="url" className="url-shorten" placeholder="Shorten a link here" onChange={ (e)=> handleUserInput(e) }/>
                <button type="submit" className="shorten" > Shorten </button>
            </form>
            
            

        </div>
    )
}

export default InputandShorten;