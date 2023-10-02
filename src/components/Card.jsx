import React from "react"
import articlePic from "../assets/katie-zaferes.png"
import starIcon from "../assets/star.png"

function Card() {
  return (
      <article className="card">
        <img src={articlePic} className="card--image" />
        <div className="card--stats">
          <img src={starIcon} alt="star icon" className="card--star" />
          <span>5.0</span>
          <span className="grey">(6) •</span>
          <span className="grey">USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className="bold">From $136</span> / person</p>
      </article>
  )
}

export default Card
