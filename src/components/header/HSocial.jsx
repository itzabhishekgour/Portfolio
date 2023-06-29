import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './header.css'

const HSocial = () => {
  return (
    <div className='social'>
        <a className='linkedin' href="https://linkedin.com" target='blank'><BsLinkedin/></a>
        <a href='https://www.instagram.com/itz_abhi_gour' target='blank'><BsInstagram/></a>
        <a href='https://github.com' target='blank'><BsGithub/></a>
    </div>
  )
}

export default HSocial