import React from 'react'
import list from "../../public/List.json"
import Card from './Card'

function Courses() {
  return (
    <div className="">
        <div className='text-center'>
 <h2 className='font-bold text-pink-500 mt-20 mb-10 center text-4xl'>Free offered courses</h2>
 <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit non rerum eos voluptas quasi commodi a ad impedit quis aliquid eius, exercitationem quia quo fugit sit quae eligendi animi at dignissimos officia hic. Voluptatibus quis molestiae quas error numquam unde rerum dolor. Sit, distinctio minus? Commodi, iure! Quaerat cum laudantium ad ea dolor fuga aspernatur tenetur consequuntur ipsa nihil.</p>
 <button className='bg-pink-500 text-black p-2 rounded-md'><a href='/'>Back</a></button>
        </div>
       
<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
    {list.map((item)=>(<Card key={item.id} item={item}/>))}
</div>
      
    </div>
  )
}

export default Courses
