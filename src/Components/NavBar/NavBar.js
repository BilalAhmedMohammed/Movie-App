import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const cnt = useSelector((state) => state.Favourit.count);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <NavLink to="/Movies" style={isActive => ({color: isActive ? "white" : "gray"})} className="navbar-brand" >Movie</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/Login" style={isActive => ({color: isActive ? "white" : "gray"})}  className="navbar-brand fs-4 me-3" aria-current="page">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Register" style={isActive => ({color: isActive ? "white" : "gray"})} className="navbar-brand fs-4" >Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Favourit" style={isActive => ({color: isActive ? "white" : "gray"})} className="navbar-brand fs-4" >Favourit<i className="ps-3 text-warning fa-solid fa-star"></i><span className='text-white ps-3'>{cnt}</span></NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}


