import React, { useRef } from 'react';
import './contact.css'
import { BiLogoGmail } from 'react-icons/bi'
import { BsFacebook, BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_i7cgjzb', 'template_iwwvppn', form.current, 'tICugeFcCiJsyAYWH')
    e.target.reset()
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id='contact'>
      <span className='section-subtitle'>Get In Touch</span>
      <h1>Contact Me</h1>

      <motion.div 
        className='container contact_container'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className='contact_options'>
          <motion.article 
            className='contact_option glass-card'
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <BiLogoGmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>mrasgour1004@gmail.com</h5>
            <a href='mailto:mrasgour1004@gmail.com' target='_blank' rel='noopener noreferrer'>Send a Message</a>
          </motion.article>

          <motion.article 
            className='contact_option glass-card'
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <BsFacebook className='contact_option_icon'/>
            <h4>Facebook</h4>
            <h5>Gour Abhishek Patel</h5>
            <a href='https://www.facebook.com/abhishek.gour.7906' target='_blank' rel='noopener noreferrer'>Connect</a>
          </motion.article>

          <motion.article 
            className='contact_option glass-card'
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <BsWhatsapp className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 82694 75286</h5>
            <a href='https://api.whatsapp.com/send?phone=918269475286' target='_blank' rel='noopener noreferrer'>Send a Message</a>
          </motion.article>
        </div>

        {/* Form */}
        <motion.form 
          ref={form} 
          onSubmit={sendEmail}
          variants={itemVariants}
          className="contact_form glass-card"
        >
          <h3>Send Message</h3>
          <div className="input_group">
            <input type='text' name='name' placeholder='Your Full Name' required />
            <span className="input_focus-border"></span>
          </div>
          <div className="input_group">
            <input type='email' name='email' placeholder='Your Email Address' required />
            <span className="input_focus-border"></span>
          </div>
          <div className="input_group">
            <textarea name='message' rows={6} placeholder="What's Your Message" required></textarea>
            <span className="input_focus-border"></span>
          </div>
          <button type='submit' className='btn btn-primary form_submit-btn'>Send Message</button>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default Contact