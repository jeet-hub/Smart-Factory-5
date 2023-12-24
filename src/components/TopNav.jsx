import React from 'react';
// import { NavLink } from 'react-router-dom';

const TopNav = (props) => {
  return (
  <>
<nav class="navbar navbar-expand-sm ">
  <div class="container-fluid">
    <a class="top-main-name navbar-brand" href="#">{props.name}</a>
  </div>

   <ul className="nav  justify-content-end">
   <div className='outer'>
    <li className="top-ul nav-item">
      <a className="top-a nav-link "  href="/digitaltwyn">Digital twin</a>
    </li>
    <li className="top-ul nav-item">
      <a className="top-a nav-link " href="/dashboard" >Dashboard</a>
    </li>
    </div>
  </ul>
  </nav>
  </>
  )
}

export default TopNav