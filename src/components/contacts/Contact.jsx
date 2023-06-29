import React, { useRef } from 'react';
import './contact.css'
import {BiLogoGmail} from 'react-icons/bi'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i7cgjzb', 'template_iwwvppn', form.current, 'tICugeFcCiJsyAYWH')
   e.target.reset()
};  
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h1>Contact Me</h1>
    <div className='container contact_container'>
      <div className='contact_options'>
      <article className='contact_option'>
        <BiLogoGmail className='.contact_option_icon'/>
        <h4>Email</h4>
        <h5>mrasgour1004@gmail.com</h5>
        <a href='mailto:mrasgour1004@gmail.com'>Send a Message</a>
        </article>

        <article className='contact_option'>
        <BsFacebook className='.contact_option_icon'/>
        <h4>Facebook</h4>
        <h5>Gour Abhishek Patel</h5>
        <a href='https://www.facebook.com/abhishek.gour.7906'>Connect</a>
        </article>

        <article className='contact_option'>
        <BsWhatsapp className='.contact_option_icon'/>
        <h4>Whatsapp</h4>
        <h5></h5>
        <a href='https://api.whatsapp.com/send?phone+918269475286'>Send a Message</a>
        </article>
       
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea type='message' rows={7} placeholder="What's Your Message" required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>

    <div className='contact_options'>
    
      </div>
   </section>
  )
}

export default Contact