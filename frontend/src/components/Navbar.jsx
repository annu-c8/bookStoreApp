import React from 'react'
import Login from './Login'

function Navbar() {
    const navitems=(<>
      <li><a href='/'>Home</a></li>
      <li><a href='/courses'>Courses</a></li>
      <li><a>Contact</a></li>
     
      <li><a>About</a></li></>)
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navitems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BOOKSTORE</a>
  </div>
  <div className='navbar-end'>

 
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-4">
    {navitems}
    
      
      
       
    </ul>
     
  </div>
  <div className='hidden md:block'>

 
  <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
 </div>

  <div>
     {/* <a className="text-white bg-pink-500 px-2 py-2 rounded-md mr-5 ml-5" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</a>
     <Login/>  */}
      <a className="text-white bg-pink-500 px-2 py-2 rounded-md mr-5 ml-5" href='/login'>Login</a>
     
  </div>
  
 
  
</div>
    </div>
     </div>
  )
}

export default Navbar
