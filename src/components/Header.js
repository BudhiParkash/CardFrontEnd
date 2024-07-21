import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/header.css'

const Hamburger = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24">
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect id="Rectangle_3" data-name="Rectangle 3" width="42" height="4" rx="2" transform="translate(304 47)" fill="#574c4c"/>
      <rect id="Rectangle_5" data-name="Rectangle 5" width="42" height="4" rx="2" transform="translate(304 67)" fill="#574c4c"/>
      <rect id="Rectangle_4" data-name="Rectangle 4" width="52" height="4" rx="2" transform="translate(294 57)" fill="#574c4c"/>
    </g>
  </svg>
);

// const Logo = () => (
//   <svg id="logo-52" width="170" height="41" viewBox="0 0 170 41" fill="none" xmlns="http://www.w3.org/2000/svg">
//     {/* SVG path data here */}
//   </svg>
// );

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        Credit Card
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">Credit Card</NavLink>
            </li>
            <li>
              <NavLink to="#">Loans</NavLink>
            </li>
            <li>
              <NavLink to="#">EMI Calculator</NavLink>
            </li>
            <li>
              <NavLink to="#">Investment</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
