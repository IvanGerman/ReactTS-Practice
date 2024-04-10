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
      <NavLink to="/component4" className='navbarLink'>Component4</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/component5" className='navbarLink'>Component5</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/component6" className='navbarLink'>Component6</NavLink>
      <br></br>
      <br></br>
    </nav>
  )
}

export default Navbar;