import React from 'react';
import './card.css'

const Card = ({ resource, onClick, slug }) => {
    console.log(slug)

    const imgStyle = {
        backgroundImage: `url(${resource.meta.image})`
    };

    return (
        <div className="rescard" onClick={() => onClick(slug)}>
            <div>
                <div className="cardImg" style={imgStyle}>

                </div>
                <div className="resOptions">
                    <div className="cardIcon"><i className="far fa-thumbs-up"></i> 155</div>
                    <div className="cardIcon"><i className="fas fa-thumbtack"></i> 15</div>
                </div>
            </div>


            <div className="cardDesc">
                <h2>{resource.meta.title}</h2>
                <p>{resource.meta.description}</p>
            </div>
        </div>
    );
}

export default Card;