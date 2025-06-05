import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hem from './Pages/Hem'
import About from './Pages/About'
import WorkExperience from './Pages/WorkExperience'
import TechDeck from './Pages/TechDeck'
import Educations from './Pages/Educations'
import Contact from './Pages/Contact'

function App() {


  return (
    <BrowserRouter>
      <Navbar /> 

      <Routes>

        <Route path="/Hem" element={<Hem />}></Route> 
        <Route path="/About" element={<About />}></Route> 
        <Route path="/WorkExperience" element={<WorkExperience />}></Route> 
        <Route path="/TechDeck" element={<TechDeck />}></Route>  
        <Route path="/Educations" element={<Educations />}></Route>  
        <Route path="/Contact" element={<Contact />}></Route>  

      </Routes> 

      <Footer /> 

    </BrowserRouter>
  )
}

export default App
