import { useState } from 'react'
import './App.css'
import Posts from './posts.jsx';
import { BoxIconElement } from 'boxicons';
import Post from './post.jsx'
import R from './posts.jsx'
function App() {

  return (
    <div className='h-screen w-screen flex-col justify-center'>
    <Post/>
     <R/>
    </div>
  )
}

export default App;