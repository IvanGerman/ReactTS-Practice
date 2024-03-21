import { NavLink } from "react-router-dom";

import  './Navbar.css';

const Navbar = () => {

  return (

    <nav className='navbar-main'>
      <NavLink to="/ugolki">Уголки</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/samorezi">Саморезы</NavLink>
      <br></br>
      <br></br>
      <NavLink to="/others">Другие товары</NavLink>
      <br></br>
      <br></br>
      {/* <NavLink to="/podarok">Выбери подарок</NavLink> */}
    </nav>
  )
}

export default Navbar;