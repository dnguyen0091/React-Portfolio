import React from 'react'
import './App.css'
import NavigationBar from './Components/navigationBar'
import VantaBackground from './Components/vantaBackGround'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/Contact'
import HomePage from './Pages/HomePage'
import Projects from './Pages/Projects'
import TechStack from './Pages/TechStack'
import Experience from './Pages/WorkExp'

import './index.css'
function App() {

  return (
    <>
      <VantaBackground/>
      <NavigationBar id="navBar" />
      <div id="home"><HomePage /></div>
      <div id="about"><AboutPage /></div>
      <div id="techStack"><TechStack /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>

      
    </>
  )
}

export default App