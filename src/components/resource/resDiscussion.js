import React from 'react';

const ResDetails = ({ res }) => {

    return (
        <div className="resBox mt-3">
            <h5>Resource Discussion</h5>
            <div className="form-group">
                <textarea className="form-control" rows="1" id="comment" placeholder="What are your thoughts on this resource?"></textarea>
            </div>
            <p className="text-muted">Currently no thoughts have been posted</p>
        </div>
    )
};

export default ResDetails;