import React from 'react';
import './resDesc.css'

const ResDesc = ({ res }) => {
    const date = res.createdAt.slice(0, 10);
    const time = res.createdAt.slice(11, 16);
    return (
        <div className="resBox">
            <h5>Resource description</h5>
            {res.meta.description}



            <div className="resDesc-footer pt-3">
                <hr />

                <div className="row">
                    <div className="col-md-4">
                        <h5 className="d-inline"><i className="far fa-user-circle"></i></h5>
                        <p className="d-inline text-muted pl-2">{res.author.username}</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5 className="d-inline"><i className="fas fa-calendar-day"></i></h5>
                        <p className="d-inline text-muted pl-2">{date}</p>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="d-inline"><i className="far fa-clock"></i></h5>
                        <p className="d-inline text-muted pl-2">{time}</p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default ResDesc;