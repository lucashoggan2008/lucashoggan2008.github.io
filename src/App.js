import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import './styles.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'




function App() {
  
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />} />
        </Routes>    
      </Router>
    
  );
}

export default App;
