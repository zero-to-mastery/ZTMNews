import React from 'react';
import './resDesc.css'

const ResDesc = ({ res }) => {
    return (
        <div className="resDescr">
            {res.meta.description}
        </div>
    )
};

export default ResDesc;