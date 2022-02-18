import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './styles.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Footer from './components/Footer'




function App() {
  
  return (
    
      <Router>
        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />} />
        </Routes>   
        <Footer />
      </Router>
    
  );
}

export default App;
