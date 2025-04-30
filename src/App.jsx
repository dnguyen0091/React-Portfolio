import './App.css'
import NavigationBar from './Components/navigationBar'
import './index.css'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/Contact'
import HomePage from './Pages/HomePage'
import Projects from './Pages/Projects'
import Experience from './Pages/WorkExp'
function App() {
  return (
    <>
      <NavigationBar />
      <div id="home"><HomePage /></div>
      <div id="about"><AboutPage /></div>
      <div id="experience"><Experience/></div>
      <div id="projects"><Projects/></div>
      <div id="contact"><Contact /></div>
    </>
  )
}

export default App
