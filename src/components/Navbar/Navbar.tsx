import { NavLink } from "react-router-dom";

import  './Navbar.css';

const Navbar = () => {

  return (

    <nav className='navbar-main'>
      <NavLink to="/component2" className='navbarLink'>Component2</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/component3" className='navbarLink'>Component3</NavLink>
      <br></br>
      <br></br>
      
      <br></br>
      <br></br>
    </nav>
  )
}

export default Navbar;