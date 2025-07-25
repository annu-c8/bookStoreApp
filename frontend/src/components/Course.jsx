import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import list from "../../public/List.json"
import Courses from './Courses'

function Course() {
  return (
    <div>
        <Navbar/>
        <Courses/>
        <Footer/>
      
    </div>
  )
}

export default Course
