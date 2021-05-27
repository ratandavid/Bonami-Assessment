import React from 'react';
import './Banner.css';


function Banner(props){

    const style = props.imageStyle;
    let imageStyle;
    if(style !== undefined)
    {
        imageStyle = style;
    }
    return (
        <div className='container-fluid banner'>
        <img className="img-fluid cst-img"  style={imageStyle} src = {props.image} alt='banner' /> 
        <div className="banner_text">
            <h1 style={{'textAlign':"center"}}>{props.heading}</h1>
            <p>{props.body}</p>
        </div>

        </div>
    );
}


export default Banner;