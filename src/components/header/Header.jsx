import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assests/me.jpg'
import HSocial from './HSocial'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Header = () => {
  return (
  <section>
  <div className='container header_container'>
    <h5>Hello I Am</h5>
    <h1>Abhishek Gour</h1>
    <h5 className='text-light'>Developer</h5>
    <CTA/>

    <div className='me'>
      <img id='img1' src={ME} alt='me'/>
    </div>

    {/* <HSocial className='header_social'/> */}

    <div className='social'>
        <a href='https://linkedin.com' target='blank'><BsLinkedin/></a>
        <a href='https://instagram.com/itz_abhi_gour?igshid=MzRlODBiNWFlZA== ' target='blank'><BsInstagram/></a>
        <a href='https://github.com/itzabhishekgour' target='blank'><BsGithub/></a>
    </div>
    

    </div>
    </section>
  )
}

export default Header
