import React from "react"
import starIcon from "../assets/star.png"

function Card(props) {
  return (
      <article className="card">
        <img src={props.img} className="card--image"/>
        <div className="card--stats">
          <img src={starIcon} alt="star icon" className="card--star" />
          <span>{props.rating}</span>
          <span className="grey">({props.reviewCount}) •</span>
          <span className="grey">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
      </article>
  )
}

export default Card
