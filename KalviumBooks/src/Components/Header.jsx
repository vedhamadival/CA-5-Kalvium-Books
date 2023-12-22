/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import {Link} from 'react-router-dom'

//state variables from books.jsx is passed
function Header({setSearchedData}) {

  //searchbar function
  const handleSearchChange = (e) => {
    setSearchedData(e.target.value);
  };

  return (
    <>
    <div id="header">
        <div id="head">
            <div id="logo">
            <img src='../Assets/Group 1.png' height='50px'/>
            </div>
            <div id="logo-name">
            <h1>Kalvium Books</h1>
            </div>
        </div>
        <div id="search-bar">
            <input type="text" placeholder="Search books" onChange={handleSearchChange}/>  
        </div>
        <div id="register">
           <Link to='/Registration'> <button>Register Here</button></Link>
        </div>
    </div>
    <hr/>
    </>

  )
}

export default Header
