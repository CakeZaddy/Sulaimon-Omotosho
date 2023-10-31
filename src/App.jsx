import { useState } from 'react'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Parallax from './Components/Parallax/Parallax'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <>
      <section className='' id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section className='' id='Services'>
        <Parallax type='services' />
      </section>
      <section className=''>
        <Services />
      </section>
      <section className='' id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section className='' id='Contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
