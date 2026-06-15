import React from 'react'
import './projects.css'
import Cm from '../../assets/connectMain.jpg'
import AlphaPayImg from '../../assets/alphapay.png'
import ChitrakoshImg from '../../assets/chitrakosh.png'
import VoxPulseImg from '../../assets/voxpulse.png'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projectList = [
    {
      id: 1,
      image: Cm,
      title: 'Interconnecter',
      description: 'A premium student networking platform designed for Prestige Institute of Engineering and Management Research (PIEMR), Indore. Features real-time chats, user profiles, skill-based team builder, and WebSocket support.',
      tags: ['React', 'WebSockets', 'Tailwind', 'Cloudinary'],
      github: 'https://github.com/itzabhishekgour/InterConnecterReloaded',
      demo: 'https://inter-connecter-reloaded-p9gv4sw28-abhishek-gour-s-projects2.vercel.app/'
    },
    {
      id: 2,
      image: AlphaPayImg,
      title: 'Alpha-Pay',
      description: 'A production-ready microservices-based digital wallet application. Integrates User, Wallet, and Transaction services with Spring Cloud API Gateway, Netflix Eureka discovery, and a fully Dockerized setup.',
      tags: ['Java 21', 'Spring Boot', 'Microservices', 'Docker'],
      github: 'https://github.com/itzabhishekgour/Alpha-Pay',
      demo: ''
    },
    {
      id: 3,
      image: ChitrakoshImg,
      title: 'Chitrakosh',
      description: 'A high-performance responsive React SPA for movie discovery using the OMDb API. Implements asynchronous debounced search auto-complete, dynamic content carousels, and persistent client-side light/dark themes.',
      tags: ['React', 'Vite', 'OMDb API', 'Vanilla CSS'],
      github: 'https://github.com/itzabhishekgour/Chitrakosh',
      demo: 'https://itzabhishekgour.github.io/Chitrakosh/'
    },
    {
      id: 4,
      image: VoxPulseImg,
      title: 'VoxPulse',
      description: 'A lightweight offline custom wake-word detection library for Python. Features automated Mel-Spectrogram audio augmentation, time-stretching, and resource-efficient RMS silence gating using a custom 2D CNN model.',
      tags: ['Python', 'TensorFlow', 'Audio DSP', 'PyPI'],
      github: 'https://github.com/itzabhishekgour/VoxPulse',
      demo: 'https://pypi.org/project/voxpulse/'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id='projects'>
      <span className='section-subtitle'>What Projects I Have Made</span>
      <h1>My Projects</h1>

      <motion.div 
        className='container projects_container'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectList.map(({ id, image, title, description, tags, github, demo }) => (
          <motion.article 
            key={id} 
            className='projects_item glass-card'
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.25 } }}
          >
            <div className='projects_img-container'>
              <div className='projects_img'>
                <img src={image} alt={title} />
              </div>
              <div className='projects_overlay'>
                <a 
                  href={github} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='project_action-btn'
                  title='GitHub Repository'
                >
                  <FiGithub />
                </a>
                {demo && (
                  <a 
                    href={demo} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='project_action-btn'
                    title='Live Site / Demo'
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
            <div className='projects_info'>
              <h3>{title}</h3>
              <p className='project_desc'>{description}</p>
              <div className='project_tags'>
                {tags.map((tag, index) => (
                  <span key={index} className='project_tag'>{tag}</span>
                ))}
              </div>
              <div className='project_actions'>
                <a 
                  href={github} 
                  className='btn btn-outline project_btn' 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  <FiGithub /> GitHub
                </a>
                {demo && (
                  <a 
                    href={demo} 
                    className='btn btn-primary project_btn' 
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <FiExternalLink /> {title === 'VoxPulse' ? 'PyPI' : 'Demo'}
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
