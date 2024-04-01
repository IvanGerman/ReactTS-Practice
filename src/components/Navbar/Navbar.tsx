import { NavLink } from "react-router-dom";

import  './Navbar.css';

const Navbar = () => {

  return (

    <nav className='navbar-main'>
      <NavLink to="/component2" className='navbarLink'>Component2</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/samorezi" className='navbarLink'>Саморезы</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/others" className='navbarLink'>Другие товары</NavLink>
      <br></br>
      <br></br>
      {/* <NavLink to="/podarok">Выбери подарок</NavLink> */}
    </nav>
  )
}

export default Navbar;