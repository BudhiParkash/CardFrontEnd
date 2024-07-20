import React from "react";
import '../style/Footer.css'

const Footer =()=>{

    return(
        <>

<footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Credit Card Manager. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </nav>L̥
      </div>
    </footer>
    
        
        </>
    )



} 

export default Footer;