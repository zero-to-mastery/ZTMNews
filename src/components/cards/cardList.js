import React from 'react';
import Card from './card';

const CardList = ({ resources }) => {
  return (
    <div>
      {
        resources.map((resource, i) => {
          return (
            <section id="cardContainer">
              <Card 
                key={i}
                resource={resource.meta}
              />
            </section>
          );
        })
      }
    </div>
  );
}

export default CardList;