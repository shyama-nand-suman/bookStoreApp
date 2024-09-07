import React from 'react'

import Home from './Home/Home'

import { Route, Router, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './Component/Signup'
const App = () => {
  return (
   <>
  
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/course' element={<Courses/>}/>
<Route path='/singup' element={<Signup/>}/>
</Routes>
  </div>
   </>
  )
}

export default App