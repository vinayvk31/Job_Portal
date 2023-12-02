import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './header.css'
import { useAuth } from '../context/auth'
import { useCompanyAuth } from '../context/companyauth'

const Header = () => {

    const [auth, setAuth]  = useAuth();
    const [companyAuth, setCompanyAuth] = useCompanyAuth()
    const navigate = useNavigate();
 
    const handlelogoutUser=() =>{
        setAuth({...auth,user:null,token:"",isUserLogin:false})
        localStorage.removeItem('auth');
        navigate('/login-user')
    
      } 
      const handlelogoutCom=() =>{
        setCompanyAuth({...companyAuth,company:null,token:"",isCompanyLogin:false})
        localStorage.removeItem('companyAuth');
        navigate('/login-company')
    
      } 
    return (

        <nav className="navbar nav-outer navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">JobPortal</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse header-nav" id="navbarNavDropdown">
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/job-listings">Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                           {!companyAuth?.user &&  <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    user
                                </Link>
                                <ul className="dropdown-menu">
                                    {auth?.user ? ( 
                                        <>
                                        <li>
                                        <Link className="dropdown-item"  to='/user-dashboard'>dashboard</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item"  onClick={handlelogoutUser} to='/login-user'>logout</Link>
                                    </li></>):(<>
                                        <li>
                                        <Link className="dropdown-item"  to='/login-user'>Login</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item"  to='/register-user'>Register</Link>
                                    </li>
                                    </>)} 
                                </ul>
                            </li>}
                          { !auth.isUserLogin &&  <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    company
                                </Link>
                                <ul className="dropdown-menu">
                                {companyAuth?.company ? ( 
                                        <>
                                        <li>
                                        <Link className="dropdown-item"  to='/company-dashboard'>dashboard</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item"  onClick={handlelogoutCom} to='/login-company'>logout</Link>
                                    </li></>):(<>
                                        <li>
                                        <Link className="dropdown-item"  to='/login-company'>Login</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item"  to='/register-company'>Register</Link>
                                    </li>
                                    </>)} 
                                    
                                </ul>
                            </li>}


                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header