import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Codeimg from '../../assets/95064821-1656c580-0722-11eb-9169-a239ffb79241.png'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const techSkills = [
    { name: 'HTML', level: 'Intermediate', pct: '75%' },
    { name: 'CSS', level: 'Intermediate', pct: '70%' },
    { name: 'React', level: 'Intermediate', pct: '70%' },
    { name: 'JavaScript', level: 'Intermediate', pct: '75%' },
    { name: 'Node.js', level: 'Basic', pct: '40%' },
    { name: 'C++', level: 'Intermediate', pct: '75%' },
    { name: 'Python', level: 'Basic', pct: '45%' },
    { name: 'Java', level: 'Intermediate', pct: '65%' }
  ]

  const softSkills = [
    { name: 'Communication', rating: 3, label: '3 / 5' },
    { name: 'Negotiation', rating: 4, label: '4 / 5' },
    { name: 'Writing', rating: 3, label: '3 / 5' },
    { name: 'Creativity', rating: 5, label: '5 / 5' }
  ]

  return (
    <section id='skills'>
      <span className='section-subtitle'>What Skills I Have</span>
      <h1>My Skills</h1>

      <motion.div 
        className='container container_skills'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* TECH SKILLS */}
        <motion.div className='skills_tech glass-card' variants={cardVariants}>
          <h3>Tech Skills</h3>
          <div className='tech_contents'>
            {techSkills.map((skill, index) => (
              <motion.article 
                className='skill_details' 
                key={index}
                whileHover={{ scale: 1.03, y: -2 }}
              >
                <BsPatchCheckFill className='skills-icons' />
                <div className='skill_info'>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.level}</small>
                  <div className='skill_progress-bar'>
                    <motion.div 
                      className='skill_progress-fill' 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.pct }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* SOFT SKILLS */}
        <motion.div className='skills_soft glass-card' variants={cardVariants}>
          <h3>Soft Skills</h3>
          <div className='soft_contents'>
            {softSkills.map((skill, index) => (
              <motion.article 
                className='skill_details soft_details' 
                key={index}
                whileHover={{ scale: 1.03, y: -2 }}
              >
                <BsPatchCheckFill className='skills-icons' />
                <div className='skill_info'>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.label}</small>
                  <div className='skill_rating-dots'>
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`rating_dot ${i < skill.rating ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* TAKEN-STYLE QUOTE BOX */}
        <motion.div className='discription glass-card' variants={cardVariants}>
          <div className='skill_img_content'>
            <div className='img_container'>
              <img src={Codeimg} alt='Coding' />
              <div className='image-overlay' />
            </div>
            <article className='quote_box'>
              <span className='quote_tag'>// STATEMENT</span>
              <p>
                "If you are looking for fake experience, I don't have it. But what I do have is a particular set of skills—skills I have acquired over a period of time, which make me a nightmare for individuals who boast fake credentials but lack genuine ability."
              </p>
            </article>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills