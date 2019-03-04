import React from 'react';
import MasonCards from '../components/cards/masonCards'
import LayoutOptions from '../components/layoutOptions/layoutOptions';
import ListCards from '../components/cards/listCards';

const Home = ({ resources, onClick, display, changeDisplay, userId, updateVotes }) => {
    const cardView = {
        tableview: "px-5 mt-3",
        masonry: "card-columns px-5 mt-3"
    }

    const submitUpvote = (slug) => {
        fetch(`https://dev-resources.herokuapp.com/resource/${slug}/${userId}/upvote`, {
          method: 'post',
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));

        updateVotes()
    }

    const hasVoted = (upArry) => {
        if(upArry.includes("179604866807627780")) return true
        else return false
    }

    return (
        <div>
            <div className="speech-bubble" role="alert">
                Heads up! This is still very much a work in progress. Some aspects may take a while to load, contain bugs or be completely non functional
            </div>

            <LayoutOptions display={display} changeDisplay={changeDisplay} />
            <p className="text-white text-center">Displaying: {Object.keys(resources).length} Resources</p>
            <div className={cardView[display]}>
                {
                    Object.keys(resources).map((res, i) => {
                        if (display === "tableview") return <ListCards key={i} resource={resources[res]} onClick={onClick} upvote={() => submitUpvote(resources[res].slug)} hasVoted={hasVoted(resources[res].upvotes, userId)} />
                        else return <MasonCards key={i} resource={resources[res]} onClick={onClick} upvote={() => submitUpvote(resources[res].slug)} hasVoted={hasVoted(resources[res].upvotes, userId)} />
                    })
                }
            </div>

        </div>
    )
};

export default Home;