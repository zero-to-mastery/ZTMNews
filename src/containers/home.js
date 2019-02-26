import React from 'react';
import CardList from '../components/cards/cardList';

const Home = ({ resources, onClick }) => {
    return (
        <div>
            <CardList resources={resources} onClick={onClick} />
        </div>
    )
};

export default Home;