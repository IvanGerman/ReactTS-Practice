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
      <NavLink to="/component7" className='navbarLink'>Component7</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/component8" className='navbarLink'>Component8</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/component9" className='navbarLink'>Component9</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/component10" className='navbarLink'>Component10</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/component11" className='navbarLink'>Component11</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/component12" className='navbarLink'>Component12</NavLink>
      <br></br>
      <br></br>
    </nav>
  )
}

export default Navbar;