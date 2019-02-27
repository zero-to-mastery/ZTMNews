import React from 'react';
import './resHeader.css'

const ResHeader = ({ res }) => {
    console.log(res)
    return (
        <div className="resHeader">
                <div className="row">
                    <div className="col-md-2">
                        <img className="img-fluid" src={res.meta.image} alt={`${res.meta.title} Thumbnail`} />
                    </div>
                    <div className="col-md-10">
                        <a href={res.link}><h1>{res.meta.title}</h1></a>
                        <a href={res.link}><p><i className="fas fa-link"></i> {res.link}</p></a>
                        <button className="btn btn-outline-warning">Tag 1</button>
                        <button className="btn btn-outline-warning">Tag 2</button>
                        <button className="btn btn-outline-warning">Tag 3</button>
                        <button className="btn btn-outline-warning"><i className="fas fa-plus"></i> 3 More</button>
                    </div>
                </div>
            </div>
    )
};

export default ResHeader;