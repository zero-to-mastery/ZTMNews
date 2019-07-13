import React from 'react';
import './mainSidebar.css';
import rusty from '../../images/rusty.png';
import rr from '../../images/rr.png';

const MainSidebar = () => {

    return (
        <nav className="main-menu">

            <div className="rustyHeader">
                <img className="ml-0 d-inline rustyImg" src={rusty} alt="Rusty"></img>
                <img className="ml-0 d-inline rustyTitle" src={rr} width={100} alt=""></img>
            </div>
            
            <hr className="mt-0 pt-0" />

            <ul>
                <li>
                    <a href="">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Home
                        </span>
                    </a>
                </li>
                <li className="has-subnav">
                    <a href="about">
                        <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                            About
                        </span>
                    </a>
                </li>
                <hr ></hr>
                <li className="has-subnav">
                    <a href="top">
                        <i className="fa fa-trophy fa-2x"></i>
                        <span className="nav-text">
                            Top Resources
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="new">
                       <i className="fa fa-clock fa-2x"></i>
                        <span className="nav-text">
                            New Resources
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="most-viewed">
                        <i className="fa fa-eye fa-2x"></i>
                        <span className="nav-text">
                            Most Viewed
                        </span>
                    </a>
                </li>
            </ul>

            <ul className="dashboard">
                <li>
                   <a href="dashboard">
                         <i className="fa fa-user-circle fa-2x"></i>
                        <span className="nav-text">
                            Dashboard
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
    )
};

export default MainSidebar;
