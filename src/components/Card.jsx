import React from "react"
import starIcon from "../images/star.png"

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
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
      </article>
  )
}

export default Card
