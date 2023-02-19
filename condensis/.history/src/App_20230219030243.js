import Navbar from "./components/Navbar";
import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Courses from './pages/Courses';
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      {/*<CourseDetail course_id={2} />*/}

      <Router>
        <Navbar/>
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Courses" element={<Courses/>}/>
          <Route exact path="/About" element={<About/>}/>
      {/*    /!*<Route exact path="/course_detail/:id" element={<CourseDetail/>}/>*!/*/}
            <Route exact path="/course_detail/1" element={<CourseDetail course_id={1} />}/>
            <Route exact path="/course_detail/2" element={<CourseDetail course_id={2} />}/>
            <Route exact path="/course_detail/3" element={<CourseDetail course_id={3} />}/>

            {/*<Route  exact path="/course_detail/:id" elemnt={(props) => <CourseDetail course_id={props.match.params.id} />}/>*/}

        </Routes>
      </Router>
    </div>
    
  );
}
