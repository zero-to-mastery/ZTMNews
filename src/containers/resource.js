import React from 'react';
import ResourceFound from './resourceFound';
import ResourceNotFound from './resourceNotFound';


const Resource = ({ res, id }) => {

    let resource = res[id]
    if(resource) return <ResourceFound res={resource} />
    else return <ResourceNotFound />

};

export default Resource;