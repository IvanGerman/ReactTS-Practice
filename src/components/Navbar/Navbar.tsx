import { NavLink } from "react-router-dom";

import  './Navbar.css';

const Navbar = () => {

  return (

    <nav className='navbar-main'>
      <NavLink to="/ugolki">Ugolki</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/samorezi">Samorezi</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/others">Others</NavLink>
    </nav>
  )
}

export default Navbar;