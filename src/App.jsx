
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
        item={item}
      />
    )
  })


  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section className="cards-list">
            {cards}
        </section>
      </main>
    </div>
  )
}

export default App
