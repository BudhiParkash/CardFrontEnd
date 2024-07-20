import React from 'react';
import '../style/Header.css'; // if using CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Credit Card</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
