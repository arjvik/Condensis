import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import About from './pages/About';
import Courses from './pages/Courses';
import Home from "./pages/Home";


export default function App() {

  return (
    <div className="App">
      
      <Router>
        
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Courses" element={<Courses/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Stanford" element={<}
        </Routes>
      </Router>
    </div>
    
  );
}
