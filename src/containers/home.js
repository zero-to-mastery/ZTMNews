import React from 'react';
import DisplayCards from '../components/cards/displayCards';

const Home = ({ resources, onClick, display, changeDisplay }) => {
    return (
        <div>
            <div className="text-center">
                <button className="btn btn-outline-warning mt-3" onClick={changeDisplay}>View cards as {display}</button>
            </div>
            <DisplayCards resources={resources} onClick={onClick} display={display} />
        </div>
    )
};

export default Home;