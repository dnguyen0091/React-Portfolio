import React from 'react'
import './App.css'
import NavigationBar from './Components/navigationBar'
import { ThemeProvider } from './Components/ThemeContext'
import VantaBackground from './Components/vantaBackGround'
import './index.css'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/Contact'
import HomePage from './Pages/HomePage'
import Projects from './Pages/Projects'
import TechStack from './Pages/TechStack'
import Experience from './Pages/WorkExp'
function App() {

  return (
    <>
    <ThemeProvider>
      <VantaBackground/>
    </ThemeProvider>
      
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