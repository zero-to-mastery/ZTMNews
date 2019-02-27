import React from 'react';
import CardList from './cardList';
import MasonCards from './masonCards'

const DisplayCards = ({ resources, onClick, display }) => {
  console.log("---DISPLAY---", display)

  if(display !== "mason") {
    return (
      <div className="card-columns px-5 mt-3">
        {
          Object.keys(resources).map((res, i) => {
            return (

              <MasonCards
                key={i}
                slug={Object.keys(resources)[i]}
                resource={resources[res]}
                onClick={onClick}
              />

            );
          })
        }
      </div>
    );
  }else {
    return (
      <div>
        {
          Object.keys(resources).map((res, i) => {
            return (

              <CardList
                key={i}
                slug={Object.keys(resources)[i]}
                resource={resources[res]}
                onClick={onClick}
              />

            );
          })
        }
      </div>
    );
  }

}

export default DisplayCards;