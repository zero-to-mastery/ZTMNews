import React from 'react';
import Card from './card';

const CardList = ({ resources }) => {
  return (
    <div>
      {
        resources.map((resource, i) => {
          // to demonstrate bookmarked and unbookmarked
          const bookClass = (i % 2 === 0 ? true : false)
          return (
            <section id="cardContainer">
            <div className={`bookmark ${(bookClass ? "bookmarkActive" : "")}`}><i class="fas fa-bookmark"></i></div>
              <Card 
                key={i}
                resource={resource.meta}
                active={bookClass}
              />
            </section>
          );
        })
      }
    </div>
  );
}

export default CardList;