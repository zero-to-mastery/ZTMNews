import React from 'react';
import './card.css'

const Card = ({ resource }) => {
    
    const imgStyle = {
        backgroundImage: `url(${resource.image})`
    };

    return (
        <div className='card'>
            <div className="cardImg" style={imgStyle}>
            </div>
            <div className="cardDesc">
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
            </div>
        </div>
    );
}

export default Card;