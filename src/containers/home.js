import React from 'react';
import FullWidthCards from '../components/cards/fullWidthCards';
import MasonCards from '../components/cards/masonCards'
import LayoutOptions from '../components/layoutOptions/layoutOptions';
import ListCards from '../components/cards/listCards';

const Home = ({ resources, onClick, display, changeDisplay }) => {
    const cardView = {
        tableview: "px-5 mt-3",
        fullwidth: "",
        masonry: "card-columns px-5 mt-3"
    }
    return (
        <div>
            <div class="alert alert-warning" role="alert">
                Heads up! This is still very much a work in progress. Some aspects may take a while to load, contain bugs or be completely non functional
            </div>

            <LayoutOptions display={display} changeDisplay={changeDisplay} />
            <p className="text-white text-center">Displaying: {Object.keys(resources).length} Resources</p>
            <div className={cardView[display]}>
                {
                    Object.keys(resources).map((res, i) => {
                        if (display === "fullwidth") return <FullWidthCards key={i} slug={Object.keys(resources)[i]} resource={resources[res]} onClick={onClick} />
                        if (display === "tableview") return <ListCards key={i} slug={Object.keys(resources)[i]} resource={resources[res]} onClick={onClick} />
                        else return <MasonCards key={i} slug={Object.keys(resources)[i]} resource={resources[res]} onClick={onClick} />
                    })
                }
            </div>

        </div>
    )
};

export default Home;