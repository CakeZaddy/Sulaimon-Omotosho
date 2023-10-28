import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 12,
    },
  },
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>SULAIMON OMOTOSHO</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}>Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src='/scroll.png'
            alt=''
            variants={textVariants}
            animate='scrollButton'
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingText'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        <p>FrontEnd Technical Writer Cake Decorator</p>
      </motion.div>
      <div className='imageContainer'>
        {/* <div className='image'> */}
        <img src='/susuHero.png' alt='' />
        {/* <img src='/hero.png' alt='' /> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Hero
