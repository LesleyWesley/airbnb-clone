
import { useState } from 'react'
//import articlePic from "./assets/katie-zaferes.png"
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import data from "./data.js"

console.log(data);

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })


  return (
    <div>
      <Navbar />
      <main>
        <section className="cards-list">
            {cards}
        </section>
      </main>
    </div>
  )
}

export default App
