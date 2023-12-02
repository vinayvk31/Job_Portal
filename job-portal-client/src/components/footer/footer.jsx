import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
 
const Footer = () => {
    return (<><hr style={{color:"black"}}/>
      <div className="footer">
 
          <div className="footer-1">
          <p>Job portal provider</p>
          <p> Phone: (123) 0000000000</p>
          <p>Email: info@example.com</p>
          <address>Main street , Main Town <br/>0000000 USA</address>
  
          </div>
          <div className="footer-2">
          <h5>services</h5>
          <p>job posting</p>
        <p>Helping job seeker</p>
        <p>Finding a talent</p> 
              
          </div>
          <div className="footer-2">
          <h5>services</h5> 
        <p>Finding jobs</p>
        <p>Service to employer</p> 
          </div>
          
          <div className="footer-3">
              <h5>Links</h5>
              <Link to="/contact">contact us</Link><br/>
        <Link to="/register-user">RegisterUser</Link><br/>
        <Link to="/register-company">RegisterCompanny</Link><br/>
        <Link to="/about">About</Link><br/> 
          </div>
      </div>
      <footer>
        <p>© 2023 Your Company. All rights reserved.</p>
    </footer>
    </>
    )
  }
  
  export default Footer