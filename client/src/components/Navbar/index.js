import React from "react";
import {NavLink} from "react-router-dom";


function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <ul>
           <NavLink exact to="/" className="text-light m-2" style={{textDecoration: 'none'}}>Google Books</NavLink>
           <NavLink exact to="/search" className="text-light m-2" style={{textDecoration: 'none'}}>Search</NavLink>
           <NavLink exact to="/saved" className="text-light m-2" style={{textDecoration: 'none'}}>Saved</NavLink>
         </ul>
      </nav>
   
  );
}

export default Navbar;
