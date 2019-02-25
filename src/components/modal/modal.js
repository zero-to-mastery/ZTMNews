import React from 'react';

import './modal.css';

const modal = (props) => {
    console.log(props)
    console.log(props.data)

    const shortDesc = (desc) => {
        if (desc.length === 0) return `No Description`
        if (desc.length < 56) return desc
        if (desc.length >= 56) return desc.slice(0, 56) + "..."
    }

    if (props.data) {
        return (
            <div className="modal-wrapper" style={{ display: props.show }} >
                <div className="res-modal">
                    <i className="far fa-window-close closeModal" onClick={props.close}></i>

                    <div className="res-modal-header">
                        <div className="row">
                            <div className="col-md-2">
                                <img className="img-fluid" src={props.data.image} alt={`${props.data.title} Thumbnail`} />
                            </div>
                            <div className="col-md-10">
                                <h1>{props.data.title}</h1>
                                <p>{shortDesc(props.data.description)}</p>
                                <button className="btn btn-outline-warning">Tag 1</button>
                                <button className="btn btn-outline-warning">Tag 2</button>
                                <button className="btn btn-outline-warning">Tag 3</button>
                                <button className="btn btn-outline-warning"><i class="fas fa-plus"></i> 3 More</button>
                            </div>
                        </div>
                    </div>

                    <div className="res-modal-body">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="res-modal-descr">
                                    {props.data.description}
                                </div>
                            </div>
                            <div className="col-md-4">
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
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    } else return null
}

export default modal;
