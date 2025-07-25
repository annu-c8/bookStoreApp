import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        

      </Routes>
      </BrowserRouter>

    
      
    </div>
  )
}

export default App
