
import './App.css'
import Card from './Card'
import Courses from './Courses'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {

  return (
    <>
      {/* <Navbar/> */}
      {/* <Card/> */}
      {/* <Courses/> */}
      {/* <Home/> */}
      <div>
        <div className="">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>



    </>
  )
}

export default App
