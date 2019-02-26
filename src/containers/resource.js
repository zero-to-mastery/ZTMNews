import React from 'react';
import ResourceFound from './resourceFound';
import ResourceNotFound from './resourceNotFound';


const Resource = ({ res, id }) => {

    // Find Resource
    let resource = "no match";
    res.map((r) => {
        if (r._id === id) resource = r
    });
    
    // Display resource or resouceNotFound
    if(resource !== "no match") return <ResourceFound res={resource} />
    else return <ResourceNotFound />

};

export default Resource;