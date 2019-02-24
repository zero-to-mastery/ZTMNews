import React from 'react';
import Card from './card';

const CardList = ({ resources }) => {
  return (
    <section id="cardContainer">
      {
        resources.map((resource, i) => {
          return (

              <Card 
                key={i}
                resource={resource.meta}
                upvotes={resource.upvotes}
              />
           
          );
        })
      }
    </section>
  );
}

export default CardList;