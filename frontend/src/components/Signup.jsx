import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Signup() {
  const navigate=useNavigate()
  const [formData,setFormData]=useState({ name:"",email:"",password:""})
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData);
    try{
      const response= await axios.post("http://localhost:5000/user/signup",formData)
       localStorage.setItem("user",JSON.stringify(response.data))
      alert("sign up successfully")
      console.log(response.data);
      

    }
    catch(error){
      alert("something went wrong")
    }
  }
  
   
  
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Signup <span className='ml-7 text-red-500'><a href='/'>X</a></span></h2>
        

        <form onSubmit={handleSubmit} className="space-y-5">
           <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Create password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Signup
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
  Have account?{" "}
  <Link to="/login" className="text-blue-600 hover:underline font-medium">
    login
  </Link>
</p>
        </form>
      </div>
    </div>
  )
}

export default Signup
