import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import logo from  "../assets/colorLogo.png"
import "./Navbar.css"


const Navbar = ({isHaveToken}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
 

    const removeToken = ()=>{
      localStorage.clear();
    }

 
    
    const handleDropdownToggle = () => {
      setDropdownOpen(!dropdownOpen);
    };
  

  

    return (
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar body">
        <div className="container-fluid">
          <img className='image' src={logo} alt='Logo Laundry'/>
          <button 
           className="navbar-toggler" 
           type="button" data-bs-toggle="collapse" 
           data-bs-target="#navbarNavDropdown" 
           aria-controls="navbarNavDropdown" 
           aria-expanded="false" 
           aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink className="nav-link active font-nav" aria-current="page" to="/home">
                  Dashboard
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  
                  id="navbarDropdown"
                  role="button"
                  onClick={handleDropdownToggle}
                >
                  Transaksi
                </a>

                <div
                  className={`dropdown-menu${dropdownOpen ? " show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <NavLink className="dropdown-item" to={"/user/pengantaran"} >
                   Pengantaran
                  </NavLink>
                  <NavLink className="dropdown-item" to={"/user/prosescuci"}>
                   Pencucian
                  </NavLink>
                  <NavLink className="dropdown-item" to={"/user/selesai"}>
                   Selesai
                  </NavLink>
                </div>
              </li>

             

                {isHaveToken ? 
                 <li className="nav-item">
                 <NavLink onClick={removeToken} className="nav-link active font-nav" aria-current="page" to="/login">
                   Logout
                 </NavLink>
                 </li> :
                  <li className="nav-item">
                  <NavLink  className="nav-link active font-nav" aria-current="page" to="/login">
                    Login
                  </NavLink>
                  </li> }
             
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
