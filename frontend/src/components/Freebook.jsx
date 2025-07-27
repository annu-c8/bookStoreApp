import React from 'react'
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Card from './Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


function Freebook() {

  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try{

      
      const res=await axios.get("http://localhost:5000/book");
      console.log(res.data)
      const data=res.data.filter((data)=>data.category==="free")
      setBook(data);
      }
      catch(error){
        console.log(error)
      }

    }
    getBook();
  },[])
 
 
     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        <h2 className='font-bold text-pink-500 text-center'>Free offered courses</h2>
        <div><p className='text-center mt-4 mb-5 ml-6 mr-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ad minima optio sed eum dolores, quaerat harum explicabo sapiente ut nulla, voluptate ab laudantium numquam error consequuntur aperiam. Saepe, culpa.</p></div>
        <div>
            <Slider {...settings}>
                {book.map((item)=>(<Card item={item} key={item.id}/>))}
       
      </Slider>
        </div>
        
      
    </div>
  )
}

export default Freebook
