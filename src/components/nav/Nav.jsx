import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { BiSolidUser, BiSolidShoppingBag, BiCodeAlt } from 'react-icons/bi'
import { MdContacts } from 'react-icons/md'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const navItems = [
    { id: '#', icon: <AiFillHome />, label: 'Home' },
    { id: '#about', icon: <BiSolidUser />, label: 'About' },
    { id: '#skills', icon: <BiSolidShoppingBag />, label: 'Skills' },
    { id: '#projects', icon: <BiCodeAlt />, label: 'Projects' },
    { id: '#contact', icon: <MdContacts />, label: 'Contact' }
  ]

  return (
    <nav className="glass-nav">
      {navItems.map((item) => {
        const isActive = activeNav === item.id;
        return (
          <a
            key={item.id}
            href={item.id}
            onClick={() => setActiveNav(item.id)}
            className={isActive ? 'active' : ''}
            data-label={item.label}
          >
            {isActive && (
              <motion.span
                layoutId="activeNavIndicator"
                className="nav_active-bg"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="nav_icon">{item.icon}</span>
          </a>
        )
      })}
    </nav>
  )
}

export default Nav