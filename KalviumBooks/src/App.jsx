import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Books from './Components/Books'
import Registration from './Components/Registration'

function App() {

  return (
    <>
    {/* <Header/> */}
    {/* <Books/> */}
    <Routes>
      <Route path='/CA-5-Kalvium-Books' element ={<Books/>}></Route>
      <Route path='/Registration' element={<Registration/>}></Route>
      <Route path='/Books' element={<Books/>}></Route>
    </Routes>
    </>
  )
}

export default App
