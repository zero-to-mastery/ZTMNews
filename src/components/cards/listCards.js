import React from 'react';

const ListCards = ({ resource, onClick, upvote, hasVoted }) => {

  const trimSnippet = (type, snip) => {
    if(snip === undefined) return `No ${type}`
    if(type === "title" && snip.length > 150) {
      return `${snip.slice(0, 150)}...`
    }
    if(type === "description" && snip.length > 100) {
      return `${snip.slice(0, 100)}...`
    }
    else return snip
  }

  return (
    <div className="cardList">
      <div className="row">
        <div className="col-md-1 py-2 text-center">
        <div className="footerButtons voteBtn">
        <i className={`fas fa-thumbs-up ${(hasVoted === true ? "vb-active" : "")}`} onClick={() => upvote()}></i>{resource.upvotes.length}
    </div>
          
        </div>
        <div className="col-md-11">
          <h2>{ trimSnippet("title", resource.meta.title)}</h2>
          <p> { trimSnippet("description", resource.meta.description) } </p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default ListCards;