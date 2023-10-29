import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'React Web App',
    img: 'https://images.pexels.com/photos/14386546/pexels-photo-14386546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus provident voluptatum veniam excepturi!',
  },
  {
    id: 2,
    title: 'Next.js Blog',
    img: 'https://images.pexels.com/photos/11001424/pexels-photo-11001424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus provident voluptatum veniam excepturi!',
  },
  {
    id: 3,
    title: 'Portfolio Page',
    img: 'https://images.pexels.com/photos/3545778/pexels-photo-3545778.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus provident voluptatum veniam excepturi!',
  },
  {
    id: 4,
    title: '3D Web Page',
    img: 'https://images.pexels.com/photos/14386546/pexels-photo-14386546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus provident voluptatum veniam excepturi!',
  },
]

const Single = ({ item }) => {
  return <section>{item.title}</section>
}

const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
