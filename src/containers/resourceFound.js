import React from 'react';
import './resource.css'
import ResHeader from '../components/resource/resHeader';
import ResDesc from '../components/resource/resDesc';
import ResOptions from '../components/resource/resOptions';

const ResourceFound = ({ res }) => {
    return (
        <div className="resWrapper">
            <ResHeader res={res} />

            <div className="resBody">
                <div className="row">
                    <div className="col-md-8">
                        <ResDesc res={res} />
                    </div>
                    <div className="col-md-4">
                        <ResOptions />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResourceFound;