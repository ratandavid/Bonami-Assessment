import React from 'react';
import './Card.css'

const text_colors = {
    "green": "text-green",
    "skyblue": "text-skyblue",
    "grey": "text-grey"
}
const btncolors = {
    "green":"btn-green",
    "skyblue":"btn-skyblue",
    "red":"btn-red",
    "white":"btn-white"   
}
function Card(props){
    const style = props.style;
    let cardStyle, imageStyle, btnStyle;
    if(style !== undefined)
    {
        if(style.card !== undefined)
        {
            cardStyle = style.card;
        }
        if(style.image !== undefined)
        {
            imageStyle = style.image;
        }
        if(style.btn !== undefined){
            btnStyle = style.btn;
        }
    }

    return(    
        <div className={`card ${props.add_width? "w-22":""} ${props.add_margin? "m-22":""}`} style={cardStyle}>
            <img className="card-img-top" src={props.image} alt="Card image cap" style={imageStyle}/>
            <div className="card-body">
            <h5 className={`card-title ${text_colors[props.color]}  ${props.headtitle? "headtitle":""}`}>{props.title}</h5>
            <p className="card-text">{props.content}</p>
            { props.showbtn &&
                <center><a className={`btn ${btncolors[props.btn]}`} style={btnStyle} >{props.btntext}</a></center>
            }
            </div>
        </div>  
    );
}


export default Card;