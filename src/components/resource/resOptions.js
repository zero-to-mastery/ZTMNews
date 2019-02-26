import React from 'react';
import './resOptions.css'

const ResOptions = ({ res }) => {
    return (
        <div className="px-4 row">
        <div className="col-md-12">
            <button className="btn btn-outline-warning btn-block m-2"><i className="far fa-thumbs-up"></i> Upvote (155)</button>
        </div>

        <div className="col-md-12">
            <button className="btn btn-outline-warning btn-block m-2"><i className="fas fa-thumbtack"></i> Bookmark</button>
        </div>

        <div className="col-md-6">
            <button className="btn btn-outline-warning btn-block m-2"><i class="fas fa-edit"></i> Edit</button>
        </div>

        <div className="col-md-6">
            <button className="btn btn-outline-warning btn-block m-2"><i class="fas fa-flag"></i> Report</button>
        </div>

    </div>
    )
};

export default ResOptions;