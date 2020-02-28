import React from "react";
import {NavLink} from "react-router-dom";


function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark " style={styles.BB} >
         <ul>
           <NavLink exact to="/" className="text-light m-2 font-weight-bold" style={styles.home}>Google Books</NavLink>
           <NavLink exact to="/search" className="text-light m-2" style={{textDecoration: 'none'}}>Search</NavLink>
           <NavLink exact to="/saved" className="text-light m-2" style={{textDecoration: 'none'}}>Saved</NavLink>
         </ul>
      </nav>
   
  );
}


const styles= {

  BB : {
    backgroundColor: '#43ccd9',
    boxShadow: '0 8px 6px -6px black' 
  },
  home : {
    textDecoration: 'none',
    fontSize: '1.3em',
  }

}

export default Navbar;
