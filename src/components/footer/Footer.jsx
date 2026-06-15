import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="glass-footer">
      <motion.a 
        href='#' 
        className='footer_logo text-gradient'
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        ABHISHEK GOUR
      </motion.a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <motion.a 
          href='https://linkedin.com/in/itzabhishekgour' 
          target='_blank' 
          rel='noopener noreferrer'
          whileHover={{ y: -5, scale: 1.1 }}
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a 
          href='https://github.com/itzabhishekgour' 
          target='_blank' 
          rel='noopener noreferrer'
          whileHover={{ y: -5, scale: 1.1 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href='https://instagram.com/itz_abhi_gour' 
          target='_blank' 
          rel='noopener noreferrer'
          whileHover={{ y: -5, scale: 1.1 }}
        >
          <FiInstagram />
        </motion.a>
        <motion.a 
          href='https://facebook.com/abhishek.gour.7906' 
          target='_blank' 
          rel='noopener noreferrer'
          whileHover={{ y: -5, scale: 1.1 }}
        >
          <FaFacebookF />
        </motion.a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; {new Date().getFullYear()} Abhishek Gour. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer