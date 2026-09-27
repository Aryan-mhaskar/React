import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className="cards">
        <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="Card Image"/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
