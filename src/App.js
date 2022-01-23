import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Testing from './pages/Testing'



function App() {
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          
        </Routes>    
      </Router>
    </div>
  );
}

export default App;
