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
    <div
      className='view'
      ref={ref}
      // variants={variants}
      // initial='initial'
      whileInView='animate'
    >
      <motion.div
        className='services'
        variants={variants}
        initial='initial'
        animate={isInView && 'animate'}
        ref={ref}
      >
        {/* <motion.div className='textContainer' variants={variants}>
          <p>
            I make beautiful web pages <br /> and give great UI
          </p>
          <hr />
        </motion.div> */}
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
            <h2>HTML CSS</h2>
            <p>
              I use HTML and CSS to create visually appealing and functional
              websites. I structure web pages with HTML and style them with CSS
              to ensure consistency and responsiveness across devices. I easily
              collaborate with UI/UX designers and backend developers to deliver
              user-friendly interfaces and optimize website performance.
            </p>
            <button>
              <a href='#Contact'>Contact Me</a>
            </button>
          </motion.div>
          <motion.div
            className='box'
            whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
          >
            <h2>JavaScript</h2>
            <p>
              As a frontend web developer fluent in JavaScript, I focus on
              creating interactive and dynamic website elements. I enhance user
              experience by implementing features like forms, animations, and
              other content updates. My knowledge of JavaScript makes me build
              good functional sites.
            </p>
            <button>
              <a href='#Contact'>Contact Me</a>
            </button>
          </motion.div>
          <motion.div
            className='box'
            whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
          >
            <h2>Tailwind</h2>
            <p>
              Tailwind CSS is a product I leverage its utility-first approach to
              efficiently style web components. I use it to customize designs
              and optimize responsiveness, and ensuring consistency across
              projects.
            </p>
            <button>
              <a href='#Contact'>Contact Me </a>{' '}
            </button>
          </motion.div>
          <motion.div
            className='box'
            whileHover={{ backgroundColor: 'lightgray', color: 'black' }}
          >
            <h2>ReactJs </h2>
            <p>
              Using React/NextJs I specialize in building dynamic user
              interfaces and handling backend projects. managing state
              efficiently, and collaborating seamlessly with backend developers.
              I easily work closely with backend teams to deliver robust and
              scalable web solutions
            </p>
            <button>
              <a href='#Contact'>Contact Me</a>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Services
