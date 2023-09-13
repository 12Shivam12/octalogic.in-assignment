
import './App.css'
import Card from './Card'
import Courses from './Courses'
import Home from './Home'
import Navbar from './Navbar'
import {  Routes, Route,  } from "react-router-dom";


function App() {

  return (
    <>
      <div className='flex gap-10'>
        <Navbar />

        <div className="">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>

      </div>



    </>
  )
}

export default App
