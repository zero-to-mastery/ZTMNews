import React from 'react';
import './card.css'

const MasonCards = ({ resource, onClick, slug }) => {

    if(!resource.meta.image) resource.meta.image = "none"
    if (!resource.meta.image.includes("http") || resource.meta.image.includes("vanguardngr")) resource.meta.image = `https://via.placeholder.com/1500/2e303a/FFFFFF/?text=No%20Image%20Found`

    
        return (
            <div className="p-2" onClick={() => onClick(slug)}>
                <div className="card cardRes">
                    <img className="card-img-top img-respsonsive" src={resource.meta.image} alt={resource.meta.title.slice(0, 15)} />
                    <div className="card-body">
                        <h1>{resource.meta.title}</h1>
                        <p className="card-text">{resource.meta.description}</p>
                    </div>
                    <div className="card-footer text-muted">
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <div className="footerButtons voteBtn">
                                    <i className="fas fa-thumbs-up"></i>{resource.upvotes.length}
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                <div className="footerButtons bookmarkBtn">
                                    <i className="fas fa-heart"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

export default MasonCards;