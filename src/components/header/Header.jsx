import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/me.jpg'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }
})

const Header = () => {
  return (
    <header id='home'>
      <div className='container header_container'>

        {/* Profile Photo */}
        <motion.div className='me' {...fadeUp(0)}>
          <div className='me-ring'></div>
          <img id='img1' src={ME} alt='Abhishek Gour' />
        </motion.div>

        {/* Text */}
        <motion.p className='header_tagline' {...fadeUp(0.15)}>Hello, I Am</motion.p>

        <motion.h1 className='header_name' {...fadeUp(0.25)}>
          Abhishek Gour
        </motion.h1>

        <motion.h5 className='header_role' {...fadeUp(0.35)}>
          Full Stack <span>Developer</span>
        </motion.h5>

        <motion.div {...fadeUp(0.45)}>
          <CTA />
        </motion.div>

        {/* Socials */}
        <motion.div className='social' {...fadeUp(0.55)}>
          <a href='https://linkedin.com/in/itzabhishekgour' target='_blank' rel='noopener noreferrer' title='LinkedIn'><BsLinkedin /></a>
          <a href='https://github.com/itzabhishekgour' target='_blank' rel='noopener noreferrer' title='GitHub'><BsGithub /></a>
          <a href='https://instagram.com/itz_abhi_gour' target='_blank' rel='noopener noreferrer' title='Instagram'><BsInstagram /></a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='scroll-down'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className='scroll-dot'></span>
        <span>Scroll</span>
      </motion.div>
    </header>
  )
}

export default Header
