import React, { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Services = () => {
  const ref = useRef()

  const isInView = useInView(ref, { margin: '-150px' })

  return (
    <>
      <motion.div
        className='services'
        variants={variants}
        initial='initial'
        animate={
          // isInView &&
          'animate'
        }
        ref={ref}
      >
        <motion.div className='textContainer' variants={variants}>
          <p>
            I make beautiful web pages <br /> and give great UI
          </p>
          <hr />
        </motion.div>
        <motion.div className='titleContainer' variants={variants}>
          <div className='title'>
            <img src='/people.webp' alt='' />
            <h1>
              <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b>{' '}
              Websites
            </h1>
          </div>
          <div className='title'>
            <h1>
              <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b>{' '}
              Business
            </h1>
            <button>WHAT WE DO</button>
          </div>
        </motion.div>

        <motion.div className='listContainer' variants={variants}>
          <motion.div
            className='box'
            whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
          >
            <h2>Brand Type</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, fuga
              odio quasi similique molestiae iste voluptate voluptatem deleniti
              nulla, incidunt facilis ullam aliquam itaque facere adipisci vel
              molestias ad error
            </p>
            <button>Contact Me</button>
          </motion.div>
          <motion.div
            className='box'
            whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
          >
            <h2>Brand Type</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, fuga
              odio quasi similique molestiae iste voluptate voluptatem deleniti
              nulla, incidunt facilis ullam aliquam itaque facere adipisci vel
              molestias ad error
            </p>
            <button>Contact Me</button>
          </motion.div>
          <motion.div
            className='box'
            whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
          >
            <h2>Brand Type</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, fuga
              odio quasi similique molestiae iste voluptate voluptatem deleniti
              nulla, incidunt facilis ullam aliquam itaque facere adipisci vel
              molestias ad error
            </p>
            <button>Contact Me</button>
          </motion.div>
          <motion.div
            className='box'
            whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
          >
            <h2>Brand Type</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, fuga
              odio quasi similique molestiae iste voluptate voluptatem deleniti
              nulla, incidunt facilis ullam aliquam itaque facere adipisci vel
              molestias ad error
            </p>
            <button>Contact Me</button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Services
