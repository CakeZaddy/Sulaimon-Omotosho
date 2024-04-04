import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    title: 'React Web App',
    img: 'https://images.pexels.com/photos/14386546/pexels-photo-14386546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Crafted by me, this web food app offers a seamless dining experience. From concept to execution, I meticulously designed and developed every aspect to ensure smooth navigation, effortless ordering, and delightful dining.',
    slug: 'https://buy-food.vercel.app/',
  },
  {
    id: 2,
    title: 'Next.js Blog',
    img: 'https://images.pexels.com/photos/11001424/pexels-photo-11001424.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Presenting this sleek blog site, meticulously crafted by me. From design to development, I ensured that every detail fosters an immersive reading experience. Dive in and discover the power of storytelling on this platform.',
    slug: 'https://kleen-kodah-xaeh.vercel.app/',
  },
  {
    id: 3,
    title: 'Portfolio Page',
    img: 'https://images.pexels.com/photos/3545778/pexels-photo-3545778.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Step into the spotlight with the portfolio page I handcrafted for a client. Every element, meticulously designed and executed, highlights their unique talents and accomplishments. Dive in and experience the magic of their story unfolding',
    slug: 'https://layo.vercel.app/',
  },
  {
    id: 4,
    title: '3D Web Page',
    img: 'https://images.pexels.com/photos/14386546/pexels-photo-14386546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc: 'Enter the immersive realm of this 3D web page, meticulously sculpted to captivate and engage. Every detail, painstakingly crafted, invites users to explore a world where creativity knows no bounds. Step into the future of web design and experience the extraordinary.',
    slug: 'https://3d-portfolio-eight-sigma.vercel.app/',
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-350, 350])

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Visit Site</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
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
