import { NavLink } from 'react-router-dom';
import { state } from '../../state';
import  './Others.css';
import SingleOthers from './SingleOthers/SingleOthers';

const Others = () => {

  const allOthers = state.others.map( (other, index) => {
    return (
      <SingleOthers key={index} name={other.name} linkToImage={other.linkToImage} price={other.price} amount={other.amount} linkToVideo={other.linkToVideo} />
    )
  })

  return (

    <div className='others'>
      <NavLink to="/">На главную страницу</NavLink>
      {allOthers}
    </div>
  )
}

export default Others;