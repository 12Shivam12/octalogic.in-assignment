
import './App.css'
import Card from './Card'
import Courses from './Courses'
import Home from './Home'
import Login from './Login'
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
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>

      </div>



    </>
  )
}

export default App
