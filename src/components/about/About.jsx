import React from 'react'
import './about.css'
import Harda from '../../assets/Harda.jpg'
import { LiaMedalSolid } from 'react-icons/lia'
import { PiGraduationCapDuotone } from 'react-icons/pi'
import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id='about'>
      <span className='section-subtitle'>Get To Know</span>
      <h1>About Me</h1>
      
      <motion.div 
        className='container about_container'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className='about_ha glass-card' variants={itemVariants}>
          <div className='about_ha-img-container'>
            <div className='about_ha-img'>
              <img src={Harda} alt='About Img' />
            </div>
          </div>
          <p>
            I'm from the scenic town of <strong>Harda</strong> and currently based in the vibrant tech hub of <strong>Indore</strong>, Madhya Pradesh. Driven by a deep passion for technology, I love exploring innovative engineering concepts and building creative solutions.
          </p>
        </motion.div>
        
        <div className='about_content'>
          <motion.div className='about_cards' variants={containerVariants}>
            <motion.article 
              className='about_card glass-card' 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className='about_card-icon-wrapper'>
                <PiGraduationCapDuotone className='about_icon'/>
              </div>
              <h3>B.Tech</h3>
              <h5>PIEMR Indore</h5>
              <div className='about_card-badge'>Pursuing</div>
              <p className='about_card-details'>Computer Science Engineering</p>
              <span className='about_card-grade'>CGPA: 7.4 / 10</span>
            </motion.article>

            <motion.article 
              className='about_card glass-card' 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className='about_card-icon-wrapper'>
                <LiaMedalSolid className='about_icon'/>
              </div>
              <h3>Class XII</h3>
              <h5>Little Angels Convent School</h5>
              <div className='about_card-badge'>Completed</div>
              <p className='about_card-details'>MP Board (PCM)</p>
              <span className='about_card-grade'>Score: 73.6%</span>
            </motion.article>

            <motion.article 
              className='about_card glass-card' 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className='about_card-icon-wrapper'>
                <LiaMedalSolid className='about_icon'/>
              </div>
              <h3>Class X</h3>
              <h5>Sunrays Higher Secondary School</h5>
              <div className='about_card-badge'>Completed</div>
              <p className='about_card-details'>MP Board</p>
              <span className='about_card-grade'>Score: 70%</span>
            </motion.article>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About