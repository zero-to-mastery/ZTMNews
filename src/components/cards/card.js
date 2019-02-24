import React from 'react';
import './card.css'

const Card = ({ resource, active, upvotes }) => {

    const imgStyle = {
        backgroundImage: `url(${resource.image})`
    };

    return (
        <div className="card">

            

            <div>
                <div className="cardImg" style={imgStyle}>

                </div>
                <div className="resOptions">
                    <div className="cardIcon"><i className="far fa-thumbs-up"></i> 155</div>
                    <div className="cardIcon"><i className="fas fa-thumbtack"></i> 15</div>
                </div>
            </div>


            <div className="cardDesc">
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
            </div>
        </div>
    );
}

export default Card;