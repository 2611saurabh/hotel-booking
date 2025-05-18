import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, useLocation,Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
// sssss
const App = () => {
//  ddddddd
  //this path in localhost if that /owner present nav disapper because
  //we put terneary opertor in navbar
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
