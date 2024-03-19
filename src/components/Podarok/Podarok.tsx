import { NavLink } from 'react-router-dom';
import  './Podarok.css';

const Podarok = () => {

  return (

    <div className='podarok'>
      <NavLink to="/">На главную страницу</NavLink>
      Выбери подарок:
    </div>
  )
}

export default Podarok;