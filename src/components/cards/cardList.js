import React from 'react';
import Card from './card';

const CardList = ({ resources, modal }) => {
  return (
    <section id="cardContainer">
      {
        resources.map((resource, i) => {
          return (

              <Card 
                key={i}
                resource={resource.meta}
                upvotes={resource.upvotes}
                modal={modal}
              />
           
          );
        })
      }
    </section>
  );
}

export default CardList;