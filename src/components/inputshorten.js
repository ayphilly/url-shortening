import React, {useState, useEffect} from "react";
import "./inputshorten.css"

function InputandShorten () {

    const [url, setUrl] = useState('');
    const [resultUrl, setResult] = useState({})
    const shortenUrl = `https://api.shrtco.de/v2/shorten?url=${url}`
    const handleUserInput = (e) => {

        var url = e.target.value;
        setUrl(url);

    }

    async function handleSubmit(e) {
        e.preventDefault();
        var response = await fetch(shortenUrl);
        var result = await response.json();
        setResult(result)
    }
    
    return (
        <div className="input-shorten">
            <form onSubmit={ (e)=> handleSubmit(e)}>
                <input type="text" name="url" className="url-shorten" placeholder="Shorten a link here" onChange={ (e)=> handleUserInput(e) }/>
                <button type="submit" className="shorten" > Shorten </button>
            </form>
            <p>{ resultUrl.ok && resultUrl.result.short_link}</p>
        </div>
    )
}

export default InputandShorten;