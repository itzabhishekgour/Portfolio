import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contacts/Contact'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App