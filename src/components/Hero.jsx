import React from "react"
import picGrid from "../assets/photo-grid.png"

function Hero() {
  return (
    <section className="hero">
      <img src={picGrid} alt="photo grid" className="photo-grid"/>
      <div className="hero-content">
        <h1>Online Experiences</h1>
        <p className="hero--paragraph">Join unique interactive activities led by one of a kind hosts - all without leaving home.</p>
      </div>
    </section>
  )
}

export default Hero
