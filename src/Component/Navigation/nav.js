import React from 'react';
import './nav.css'

function Navigation(){
    let navItems = ['Home Page', 'About Us', 'Service', 'Contact', 'External'];
    let navLinks = navItems.map(item => <li className="nav-item">
    <a className="nav-link" href="#">{item}</a>
    </li> )
    return (
        <div className="container-fluid">
        <nav className="navbar navbar-expand-xl">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                {navLinks}
              </ul>
            </div>
          </nav>
        
    </div>
    );
}

export default Navigation 