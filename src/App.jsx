import { useState } from 'react'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Parallax from './Components/Parallax/Parallax'

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
      <section className=''>Services</section>
      <section className='' id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <section className=''>Portfolio1</section>
      <section className=''>Portfolio2</section>
      <section className=''>Portfolio3</section>
      <section className='' id='Contact'>
        Contact
      </section>
    </>
  )
}

export default App
