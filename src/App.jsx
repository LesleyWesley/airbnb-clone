
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import articlePic from "./assets/katie-zaferes.png"
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Card
          img={articlePic}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </main>
    </div>
  )
}

export default App
