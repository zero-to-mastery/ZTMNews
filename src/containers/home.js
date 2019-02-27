import React from 'react';
import DisplayCards from '../components/cards/displayCards';

const Home = ({ resources, onClick, display }) => {
    return (
        <div>
            <DisplayCards resources={resources} onClick={onClick} display={display} />
        </div>
    )
};

export default Home;