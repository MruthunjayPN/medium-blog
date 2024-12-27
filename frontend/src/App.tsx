// import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blogs from './pages/Blog'
import CreateBlog from './pages/CreateBlog'

import DisplayBlog from './pages/DisplayBlog'

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/addBlog' element={<CreateBlog />} />
        <Route path="/blog/:id" element={<DisplayBlog />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
