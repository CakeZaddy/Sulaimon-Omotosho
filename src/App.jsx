import { useState } from 'react'
import './app.scss'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
      <section className='' id='Homepage'>
        <Navbar />
      </section>
      <section className='' id='Services'>
        Parallax
      </section>
      <section className=''>Services</section>
      <section className='' id='Portfolio'>
        Parallax
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
