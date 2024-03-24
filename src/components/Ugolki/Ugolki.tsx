import { NavLink } from 'react-router-dom';
import { state } from '../../state';
import SingleUgolok from './SingleUgolok/SingleUgolok';
import  './Ugolki.css';

const Ugolki = () => {

  const allUgolki = state.ugolki.map( (ugolok, index) => {
    return (
      <SingleUgolok key={index} name={ugolok.name} linkToImage={ugolok.linkToImage} price={ugolok.price} amount={ugolok.amount} linkToVideo={ugolok.linkToVideo} />
    )
  })

  return (

    <div className='ugolki'>
      <div className='aboveLine'></div>
      <NavLink to="/" className='backToStartLink'>На главную страницу</NavLink>
      {allUgolki}
    </div>
  )
}

export default Ugolki;
