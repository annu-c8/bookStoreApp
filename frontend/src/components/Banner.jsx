import React, { useEffect, useState } from 'react'
import banner from "../../public/banner1.jpg"

function Banner() {

   
  return (
    <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row mt-20 p-8">
      <div className=' w-full md:w-1/2'><h1 className='text-4xl'>Hello! We Welcome you here to read and learn something <span className='text-pink-500 font-bold'>new</span></h1>
      <p className='mt-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate perferendis, iure ipsa fugiat eligendi alias soluta optio cumque exercitationem amet at numquam non autem provident repellendus dolores consequatur, tenetur enim.</p>
      <label className="input validator mt-10">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
  
</label>



<div className="validator-hint hidden">Enter valid email address</div>

</div>


      
      <div className='w-full md:w-1/2 order-1'><img src={banner} /></div>
    </div>
  )
}

export default Banner
