import React from "react"
import starIcon from "../images/star.png"

function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
      <article className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.item.coverImg} className="card--image"/>
        <div className="card--stats">
          <img src={starIcon} alt="star icon" className="card--star" />
          <span>{props.item.stats.rating}</span>
          <span className="grey">({props.item.stats.reviewCount}) •</span>
          <span className="grey">{props.item.location}</span>
        </div>
        <p className="card--title">{props.item.title}</p>
        <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
      </article>
  )
}

export default Card
