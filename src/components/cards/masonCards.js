import React from 'react';
import './card.css'

const MasonCards = ({ resource, onClick, slug }) => {

    if(!resource.meta.image) resource.meta.image = "none"
    if (!resource.meta.image.includes("http") || resource.meta.image.includes("vanguardngr")) resource.meta.image = `https://via.placeholder.com/1500/2e303a/FFFFFF/?text=No%20Image%20Found`

    
        return (
            <div className="p-2" onClick={() => onClick(slug)}>
                <div class="card cardRes">
                    <img class="card-img-top img-respsonsive" src={resource.meta.image} alt={resource.meta.title.slice(0, 15)} />
                    <div class="card-body">
                        <h1>{resource.meta.title}</h1>
                        <p class="card-text">{resource.meta.description}</p>
                    </div>
                    <div class="card-footer text-muted">
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <div className="footerButtons voteBtn">
                                    <i class="fas fa-thumbs-up"></i>{resource.upvotes.length}
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                <div className="footerButtons bookmarkBtn">
                                    <i class="fas fa-heart"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

export default MasonCards;