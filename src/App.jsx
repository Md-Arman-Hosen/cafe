/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'
import Header from './Header/Header'
import PropTypes from "prop-types";


function App() {

  const [bookMarks,setbookMarks] = useState([]);

  const handleAddToBookmarks = blog => {
    console.log('bookmarks added');
  }
   
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <main className='md:flex'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
          <Bookmarks></Bookmarks>
        </main>
      </div>
    </>
  )
}
App.propTypes =
{
    handleAddToBookmarks: PropTypes.func.isRequired
}

export default App
