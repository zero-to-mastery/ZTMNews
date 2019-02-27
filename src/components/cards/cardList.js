import React from 'react';
import Card from './card';

const CardList = ({ resources, onClick }) => {
  return (
    <section id="cardContainer">
      {
        Object.keys(resources).map((res, i) => {
          return (

              <Card 
                key={i}
                slug={Object.keys(resources)[i]}
                resource={resources[res]}
                onClick={onClick}
              />
           
          );
        })
      }
    </section>
  );
}

export default CardList;