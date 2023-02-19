import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import About from './pages/About';
import Courses from './pages/Courses';
import Home from "./pages/Home";
import StanfordCourses from "./pages/StanfordCourses";
import CreateInvoice from "./pages/Invoice";

import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Sora',
      'sans-serif',
    ].join(','),
  },});


export default function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Courses" element={<Courses/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Stanford" element={<StanfordCourses/>}/>
          <Route exact path="/Invoice" element={<CreateInvoice/>}/>
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
    
  );
}
