import React from 'react';
import Card from './card';

const CardList = ({ resources, modal, onClick }) => {
  return (
    <section id="cardContainer">
      {
        resources.map((resource, i) => {
          return (

              <Card 
                key={i}
                id={resource._id}
                resource={resource.meta}
                upvotes={resource.upvotes}
                modal={modal}
                onClick={onClick}
              />
           
          );
        })
      }
    </section>
  );
}

export default CardList;