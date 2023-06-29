import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidUser} from 'react-icons/bi'
import {MdContacts} from 'react-icons/md'
import {BiSolidShoppingBag} from 'react-icons/bi'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiSolidUser /></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiSolidShoppingBag /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContacts /></a>
    </nav>
  )
}

export default Nav