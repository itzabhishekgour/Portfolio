import React from 'react'
import './about.css'
import Harda from '../../assests/Harda.jpg'
import {LiaMedalSolid} from 'react-icons/lia'

const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h1 >About me</h1>
    <div className='container about_container'>
      <div className='about_ha'>
          <div className='about_ha-img'>
            <img src={Harda} alt='About Img' />
            <h2>HARDA</h2>
          </div>
          <p>I'm from small town Harda and Currently lived in Indore which is situated in Madhya Pradesh, India. I was always amazed by technology and excited to learn and discover innovative ideas/tech.</p>
      </div>
      
      <div className='about_content'>
        <div className='about_cards'>
         <article className='about_card'>
          
          <LiaMedalSolid className='about_icon'/>
          <h3>Experience</h3>
          <h6>1 year Working</h6>
         
         </article>

         <article className='about_card'>
          
          <LiaMedalSolid className='about_icon'/>
          <h3>BTECH</h3>
          <h6>PIEMR INDORE</h6>
         
         </article>

         <article className='about_card'>
          
          <LiaMedalSolid className='about_icon'/>
          <h3>12TH</h3>
          <h6>Little angel's Convent School Indore</h6>
         
         </article>

         <article className='about_card'>
          
          <LiaMedalSolid className='about_icon'/>
          <h3>10TH</h3>
          <h6>Sunrays Higher Secondary School Harda</h6>
         
         </article>
        </div>
      </div>
    
    </div>
   </section>
  )
}

export default About