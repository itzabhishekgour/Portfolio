import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Skills/>
        <Footer/>
        <Contact/>
    </>
  )
}

export default App