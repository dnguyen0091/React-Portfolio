import './App.css'
import NavigationBar from './Components/navigationBar'
import './index.css'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/Contact'
import HomePage from './Pages/HomePage'
function App() {

  return (
    <>
      <NavigationBar />
      <HomePage />
      <AboutPage />
      <Contact/>
    </>
  )
}

export default App
