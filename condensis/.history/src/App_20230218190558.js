import Navbar from "./components/Navbar";
import "./styles.css";
import {NavLink} from 'react-router-dom';
import About from './pages/About';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";



export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route></Route>
      </Router>
    </div>
  );
}
