import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import {Link} from 'react-router-dom'
const Course = () => {
  return (
    <>
     
     <div className='`max-w-screen-2xl container mx-auto mt-40 md:px-20 px-4'>
           <div className='mt-29 items-center justify-center text-center'> 
            
             <h1 className='text-2xl  md:text-4xl'>We are Deligated to have  you  <span className='text-pink-600'  >Here</span></h1>
             <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, corporis. Cumque possimus sequi beatae. Repudiandae maxime quibusdam atque cumque incidunt repellat reiciendis magnam cupiditate. Sed ratione ipsam aperiam aut architecto.</p>
             <Link to="/">
             <button className=' mt-6 bg-pink-600 text-white px-3 py-1 rounded-md hover:bg-pink-800 duration-200'>Back</button>

             </Link>
           </div>
           <div className='mt-6 grid grid-cols-1 md:grid-cols-4 gap-x-14 gap-y-14 '>
            {list.map((item)=>(
             <Card item={item} key={item.id}/>

            ))}
           </div>
      </div>
    

    </>
  )
}

export default Course